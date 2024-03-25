"""Helper functions."""

__docformat__ = "numpy"

import argparse
import os
import random
import re
from datetime import (
    datetime,
)
from pathlib import Path
from typing import TYPE_CHECKING, Dict, List, Optional, Tuple, Union

import numpy as np
import pandas as pd
import pytz
import requests
from rich.table import Table

from openbb_terminal.core.session.current_system import get_current_system

# IMPORTS INTERNAL
from openbb_terminal.core.session.current_user import (
    get_current_user,
    get_platform_user,
)
from openbb_terminal.rich_config import console

ALLOWED_NUMBER_OF_ROWS = 366
ALLOWED_NUMBER_OF_COLUMNS = 15

if TYPE_CHECKING:
    from openbb_charting.core.openbb_figure import OpenBBFigure


# pylint: disable=R1702,R0912


def parse_and_split_input(an_input: str, custom_filters: List) -> List[str]:
    """Filter and split the input queue.

    Uses regex to filters command arguments that have forward slashes so that it doesn't
    break the execution of the command queue.
    Currently handles unix paths and sorting settings for screener menus.

    Parameters
    ----------
    an_input : str
        User input as string
    custom_filters : List
        Additional regular expressions to match

    Returns
    -------
    List[str]
        Command queue as list
    """
    # Make sure that the user can go back to the root when doing "/"
    if an_input and an_input == "/":
        an_input = "home"

    # everything from ` -f ` to the next known extension
    file_flag = r"(\ -f |\ --file )"
    up_to = r".*?"
    known_extensions = r"(\.(xlsx|csv|xls|tsv|json|yaml|ini|openbb|ipynb))"
    unix_path_arg_exp = f"({file_flag}{up_to}{known_extensions})"

    # Add custom expressions to handle edge cases of individual controllers
    custom_filter = ""
    for exp in custom_filters:
        if exp is not None:
            custom_filter += f"|{exp}"
            del exp

    slash_filter_exp = f"({unix_path_arg_exp}){custom_filter}"

    filter_input = True
    placeholders: Dict[str, str] = {}
    while filter_input:
        match = re.search(pattern=slash_filter_exp, string=an_input)
        if match is not None:
            placeholder = f"{{placeholder{len(placeholders)+1}}}"
            placeholders[placeholder] = an_input[
                match.span()[0] : match.span()[1]  # noqa:E203
            ]
            an_input = (
                an_input[: match.span()[0]]
                + placeholder
                + an_input[match.span()[1] :]  # noqa:E203
            )
        else:
            filter_input = False

    commands = an_input.split("/")

    for command_num, command in enumerate(commands):
        if command == commands[command_num] == commands[-1] == "":
            return list(filter(None, commands))
        matching_placeholders = [tag for tag in placeholders if tag in command]
        if len(matching_placeholders) > 0:
            for tag in matching_placeholders:
                commands[command_num] = command.replace(tag, placeholders[tag])
    return commands


def return_colored_value(value: str):
    """Return the string value with green, yellow, red or white color based on
    whether the number is positive, negative, zero or other, respectively.

    Parameters
    ----------
    value: str
        string to be checked

    Returns
    -------
    value: str
        string with color based on value of number if it exists
    """
    values = re.findall(r"[-+]?(?:\d*\.\d+|\d+)", value)

    # Finds exactly 1 number in the string
    if len(values) == 1:
        if float(values[0]) > 0:
            return f"[green]{value}[/green]"

        if float(values[0]) < 0:
            return f"[red]{value}[/red]"

        if float(values[0]) == 0:
            return f"[yellow]{value}[/yellow]"

    return f"{value}"


# pylint: disable=too-many-arguments
def print_rich_table(  # noqa: PLR0912
    df: pd.DataFrame,
    show_index: bool = False,
    title: str = "",
    index_name: str = "",
    headers: Optional[Union[List[str], pd.Index]] = None,
    floatfmt: Union[str, List[str]] = ".2f",
    show_header: bool = True,
    automatic_coloring: bool = False,
    columns_to_auto_color: Optional[List[str]] = None,
    rows_to_auto_color: Optional[List[str]] = None,
    export: bool = False,
    limit: Optional[int] = 1000,
    columns_keep_types: Optional[List[str]] = None,
    use_tabulate_df: bool = True,
):
    """Prepare a table from df in rich.

    Parameters
    ----------
    df: pd.DataFrame
        Dataframe to turn into table
    show_index: bool
        Whether to include index
    title: str
        Title for table
    index_name : str
        Title for index column
    headers: List[str]
        Titles for columns
    floatfmt: Union[str, List[str]]
        Float number formatting specs as string or list of strings. Defaults to ".2f"
    show_header: bool
        Whether to show the header row.
    automatic_coloring: bool
        Automatically color a table based on positive and negative values
    columns_to_auto_color: List[str]
        Columns to automatically color
    rows_to_auto_color: List[str]
        Rows to automatically color
    export: bool
        Whether we are exporting the table to a file. If so, we don't want to print it.
    limit: Optional[int]
        Limit the number of rows to show.
    columns_keep_types: Optional[List[str]]
        Columns to keep their types, i.e. not convert to numeric
    """
    if export:
        return

    # Make a copy of the dataframe to avoid SettingWithCopyWarning
    df = df.copy()

    show_index = not isinstance(df.index, pd.RangeIndex) and show_index
    #  convert non-str that are not timestamp or int into str
    # eg) praw.models.reddit.subreddit.Subreddit
    for col in df.columns:
        if columns_keep_types is not None and col in columns_keep_types:
            continue
        try:
            if not any(
                isinstance(df[col].iloc[x], pd.Timestamp)
                for x in range(min(10, len(df)))
            ):
                df[col] = pd.to_numeric(df[col], errors="ignore")
        except (ValueError, TypeError):
            df[col] = df[col].astype(str)

    def _get_headers(_headers: Union[List[str], pd.Index]) -> List[str]:
        """Check if headers are valid and return them."""
        output = _headers
        if isinstance(_headers, pd.Index):
            output = list(_headers)
        if len(output) != len(df.columns):
            raise ValueError("Length of headers does not match length of DataFrame.")
        return output

    df = df.copy() if not limit else df.copy().iloc[:limit]
    if automatic_coloring:
        if columns_to_auto_color:
            for col in columns_to_auto_color:
                # checks whether column exists
                if col in df.columns:
                    df[col] = df[col].apply(lambda x: return_colored_value(str(x)))
        if rows_to_auto_color:
            for row in rows_to_auto_color:
                # checks whether row exists
                if row in df.index:
                    df.loc[row] = df.loc[row].apply(
                        lambda x: return_colored_value(str(x))
                    )

        if columns_to_auto_color is None and rows_to_auto_color is None:
            df = df.applymap(lambda x: return_colored_value(str(x)))

    exceeds_allowed_columns = len(df.columns) > ALLOWED_NUMBER_OF_COLUMNS
    exceeds_allowed_rows = len(df) > ALLOWED_NUMBER_OF_ROWS

    if exceeds_allowed_columns:
        original_columns = df.columns.tolist()
        trimmed_columns = df.columns.tolist()[:ALLOWED_NUMBER_OF_COLUMNS]
        df = df[trimmed_columns]
        trimmed_columns = [
            col for col in original_columns if col not in trimmed_columns
        ]

    if exceeds_allowed_rows:
        n_rows = len(df.index)
        trimmed_rows = df.index.tolist()[:ALLOWED_NUMBER_OF_ROWS]
        df = df.loc[trimmed_rows]
        trimmed_rows_count = n_rows - ALLOWED_NUMBER_OF_ROWS

    if use_tabulate_df:
        table = Table(title=title, show_lines=True, show_header=show_header)

        if show_index:
            table.add_column(index_name)

        if headers is not None:
            headers = _get_headers(headers)
            for header in headers:
                table.add_column(str(header))
        else:
            for column in df.columns:
                table.add_column(str(column))

        if isinstance(floatfmt, list) and len(floatfmt) != len(df.columns):
            raise (
                ValueError(
                    "Length of floatfmt list does not match length of DataFrame columns."
                )
            )
        if isinstance(floatfmt, str):
            floatfmt = [floatfmt for _ in range(len(df.columns))]

        for idx, values in zip(df.index.tolist(), df.values.tolist()):
            # remove hour/min/sec from timestamp index - Format: YYYY-MM-DD # make better
            row_idx = [str(idx)] if show_index else []
            row_idx += [
                (
                    str(x)
                    if not isinstance(x, float) and not isinstance(x, np.float64)
                    else (
                        f"{x:{floatfmt[idx]}}"
                        if isinstance(floatfmt, list)
                        else (
                            f"{x:.2e}"
                            if 0 < abs(float(x)) <= 0.0001
                            else f"{x:floatfmt}"
                        )
                    )
                )
                for idx, x in enumerate(values)
            ]
            table.add_row(*row_idx)
        console.print(table)
    else:
        console.print(df.to_string(col_space=0))

    if exceeds_allowed_columns:
        console.print(
            f"[yellow]\nAllowed number of columns exceeded ({ALLOWED_NUMBER_OF_COLUMNS}).\n"
            f"The following columns were removed from the output: {', '.join(trimmed_columns)}.\n[/yellow]"
        )

    if exceeds_allowed_rows:
        console.print(
            f"[yellow]\nAllowed number of rows exceeded ({ALLOWED_NUMBER_OF_ROWS}).\n"
            f"{trimmed_rows_count} rows were removed from the output.\n[/yellow]"
        )

    if exceeds_allowed_columns or exceeds_allowed_rows:
        console.print("Use the `--export` flag to analyse the full output on a file.")


def check_non_negative(value) -> int:
    """Argparse type to check non negative int."""
    new_value = int(value)
    if new_value < 0:
        raise argparse.ArgumentTypeError(f"{value} is negative")
    return new_value


def check_positive(value) -> int:
    """Argparse type to check positive int."""
    new_value = int(value)
    if new_value <= 0:
        raise argparse.ArgumentTypeError(f"{value} is an invalid positive int value")
    return new_value


def get_user_agent() -> str:
    """Get a not very random user agent."""
    user_agent_strings = [
        "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.10; rv:86.1) Gecko/20100101 Firefox/86.1",
        "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:86.1) Gecko/20100101 Firefox/86.1",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:82.1) Gecko/20100101 Firefox/82.1",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:86.0) Gecko/20100101 Firefox/86.0",
        "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:86.0) Gecko/20100101 Firefox/86.0",
        "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.10; rv:83.0) Gecko/20100101 Firefox/83.0",
        "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:84.0) Gecko/20100101 Firefox/84.0",
    ]

    return random.choice(user_agent_strings)  # nosec # noqa: S311


AVAILABLE_FLAIRS = {
    ":openbb": "(🦋)",
    ":bug": "(🐛)",
    ":rocket": "(🚀)",
    ":diamond": "(💎)",
    ":stars": "(✨)",
    ":baseball": "(⚾)",
    ":boat": "(⛵)",
    ":phone": "(☎)",
    ":mercury": "(☿)",
    ":hidden": "",
    ":sun": "(☼)",
    ":moon": "(☾)",
    ":nuke": "(☢)",
    ":hazard": "(☣)",
    ":tunder": "(☈)",
    ":king": "(♔)",
    ":queen": "(♕)",
    ":knight": "(♘)",
    ":recycle": "(♻)",
    ":scales": "(⚖)",
    ":ball": "(⚽)",
    ":golf": "(⛳)",
    ":piece": "(☮)",
    ":yy": "(☯)",
}


def get_flair() -> str:
    """Get a flair icon."""

    current_user = get_current_user()  # pylint: disable=redefined-outer-name
    current_flair = str(current_user.preferences.FLAIR)
    flair = AVAILABLE_FLAIRS.get(current_flair, current_flair)

    if (
        current_user.preferences.USE_DATETIME
        and get_user_timezone_or_invalid() != "INVALID"
    ):
        dtime = datetime.now(pytz.timezone(get_user_timezone())).strftime(
            "%Y %b %d, %H:%M"
        )

        # if there is no flair, don't add an extra space after the time
        if flair == "":
            return f"{dtime}"

        return f"{dtime} {flair}"

    return flair


def is_timezone_valid(user_tz: str) -> bool:
    """Check whether user timezone is valid.

    Parameters
    ----------
    user_tz: str
        Timezone to check for validity

    Returns
    -------
    bool
        True if timezone provided is valid
    """
    return user_tz in pytz.all_timezones


def get_user_timezone() -> str:
    """Get user timezone if it is a valid one.

    Returns
    -------
    str
        user timezone based on .env file
    """
    return get_current_user().preferences.TIMEZONE


def get_user_timezone_or_invalid() -> str:
    """Get user timezone if it is a valid one.

    Returns
    -------
    str
        user timezone based on timezone.openbb file or INVALID
    """
    user_tz = get_user_timezone()
    if is_timezone_valid(user_tz):
        return f"{user_tz}"
    return "INVALID"


def check_file_type_saved(valid_types: Optional[List[str]] = None):
    """Provide valid types for the user to be able to select.

    Parameters
    ----------
    valid_types: List[str]
        List of valid types to export data

    Returns
    -------
    check_filenames: Optional[List[str]]
        Function that returns list of filenames to export data
    """

    def check_filenames(filenames: str = "") -> str:
        """Check if filenames are valid.

        Parameters
        ----------
        filenames: str
            filenames to be saved separated with comma

        Returns
        ----------
        str
            valid filenames separated with comma
        """
        if not filenames or not valid_types:
            return ""
        valid_filenames = list()
        for filename in filenames.split(","):
            if filename.endswith(tuple(valid_types)):
                valid_filenames.append(filename)
            else:
                console.print(
                    f"[red]Filename '{filename}' provided is not valid!\nPlease use one of the following file types:"
                    f"{','.join(valid_types)}[/red]\n"
                )
        return ",".join(valid_filenames)

    return check_filenames


def remove_timezone_from_dataframe(df: pd.DataFrame) -> pd.DataFrame:
    """
    Remove timezone information from a dataframe.

    Parameters
    ----------
    df : pd.DataFrame
        The dataframe to remove timezone information from

    Returns
    -------
    pd.DataFrame
        The dataframe with timezone information removed
    """

    date_cols = []
    index_is_date = False

    # Find columns and index containing date data
    if (
        df.index.dtype.kind == "M"
        and hasattr(df.index.dtype, "tz")
        and df.index.dtype.tz is not None
    ):
        index_is_date = True

    for col, dtype in df.dtypes.items():
        if dtype.kind == "M" and hasattr(df.index.dtype, "tz") and dtype.tz is not None:
            date_cols.append(col)

    # Remove the timezone information
    for col in date_cols:
        df[col] = df[col].dt.date

    if index_is_date:
        index_name = df.index.name
        df.index = df.index.date
        df.index.name = index_name

    return df


def compose_export_path(func_name: str, dir_path: str) -> Path:
    """Compose export path for data from the terminal.

    Creates a path to a folder and a filename based on conditions.

    Parameters
    ----------
    func_name : str
        Name of the command that invokes this function
    dir_path : str
        Path of directory from where this function is called

    Returns
    -------
    Path
        Path variable containing the path of the exported file
    """
    now = datetime.now()
    # Resolving all symlinks and also normalizing path.
    resolve_path = Path(dir_path).resolve()
    # Getting the directory names from the path. Instead of using split/replace (Windows doesn't like that)
    # check if this is done in a main context to avoid saving with openbb_terminal
    if resolve_path.parts[-2] == "openbb_terminal":
        path_cmd = f"{resolve_path.parts[-1]}"
    else:
        path_cmd = f"{resolve_path.parts[-2]}_{resolve_path.parts[-1]}"

    default_filename = f"{now.strftime('%Y%m%d_%H%M%S')}_{path_cmd}_{func_name}"

    full_path = (
        Path(get_platform_user().preferences.export_directory) / default_filename
    )

    return full_path


def ask_file_overwrite(file_path: Path) -> Tuple[bool, bool]:
    """Helper to provide a prompt for overwriting existing files.

    Returns two values, the first is a boolean indicating if the file exists and the
    second is a boolean indicating if the user wants to overwrite the file.
    """
    # Jeroen asked for a flag to overwrite no matter what
    current_user = get_current_user()
    if current_user.preferences.FILE_OVERWRITE:
        return False, True
    if get_current_system().TEST_MODE:
        return False, True
    if file_path.exists():
        overwrite = input("\nFile already exists. Overwrite? [y/n]: ").lower()
        if overwrite == "y":
            file_path.unlink(missing_ok=True)
            # File exists and user wants to overwrite
            return True, True
        # File exists and user does not want to overwrite
        return True, False
    # File does not exist
    return False, True


# This is a false positive on pylint and being tracked in pylint #3060
# pylint: disable=abstract-class-instantiated
def save_to_excel(df, saved_path, sheet_name, start_row=0, index=True, header=True):
    """Saves a Pandas DataFrame to an Excel file.

    Args:
        df: A Pandas DataFrame.
        saved_path: The path to the Excel file to save to.
        sheet_name: The name of the sheet to save the DataFrame to.
        start_row: The row number to start writing the DataFrame at.
        index: Whether to write the DataFrame index to the Excel file.
        header: Whether to write the DataFrame header to the Excel file.
    """

    overwrite_options = {
        "o": "replace",
        "a": "overlay",
        "n": "new",
    }

    if not saved_path.exists():
        with pd.ExcelWriter(saved_path, engine="openpyxl") as writer:
            df.to_excel(writer, sheet_name=sheet_name, index=index, header=header)

    else:
        with pd.ExcelFile(saved_path) as reader:
            overwrite_option = "n"
            if sheet_name in reader.sheet_names:
                overwrite_option = input(
                    "\nSheet already exists. Overwrite/Append/New? [o/a/n]: "
                ).lower()
                start_row = 0
                if overwrite_option == "a":
                    existing_df = pd.read_excel(saved_path, sheet_name=sheet_name)
                    start_row = existing_df.shape[0] + 1

            with pd.ExcelWriter(
                saved_path,
                mode="a",
                if_sheet_exists=overwrite_options[overwrite_option],
                engine="openpyxl",
            ) as writer:
                df.to_excel(
                    writer,
                    sheet_name=sheet_name,
                    startrow=start_row,
                    index=index,
                    header=False if overwrite_option == "a" else header,
                )


# This is a false positive on pylint and being tracked in pylint #3060
# pylint: disable=abstract-class-instantiated
def export_data(
    export_type: str,
    dir_path: str,
    func_name: str,
    df: pd.DataFrame = pd.DataFrame(),
    sheet_name: Optional[str] = None,
    figure: Optional["OpenBBFigure"] = None,
    margin: bool = True,
) -> None:
    """Export data to a file.

    Parameters
    ----------
    export_type : str
        Type of export between: csv,json,xlsx,xls
    dir_path : str
        Path of directory from where this function is called
    func_name : str
        Name of the command that invokes this function
    df : pd.Dataframe
        Dataframe of data to save
    sheet_name : str
        If provided.  The name of the sheet to save in excel file
    figure : Optional[OpenBBFigure]
        Figure object to save as image file
    margin : bool
        Automatically adjust subplot parameters to give specified padding.
    """

    if export_type:
        saved_path = compose_export_path(func_name, dir_path).resolve()
        saved_path.parent.mkdir(parents=True, exist_ok=True)
        for exp_type in export_type.split(","):
            # In this scenario the path was provided, e.g. --export pt.csv, pt.jpg
            if "." in exp_type:
                saved_path = saved_path.with_name(exp_type)
            # In this scenario we use the default filename
            else:
                if ".OpenBB_openbb_terminal" in saved_path.name:
                    saved_path = saved_path.with_name(
                        saved_path.name.replace(
                            ".OpenBB_openbb_terminal", "OpenBBTerminal"
                        )
                    )
                saved_path = saved_path.with_suffix(f".{exp_type}")

            exists, overwrite = False, False
            is_xlsx = exp_type.endswith("xlsx")
            if sheet_name is None and is_xlsx or not is_xlsx:
                exists, overwrite = ask_file_overwrite(saved_path)

            if exists and not overwrite:
                existing = len(list(saved_path.parent.glob(saved_path.stem + "*")))
                saved_path = saved_path.with_stem(f"{saved_path.stem}_{existing + 1}")

            df = df.replace(
                {
                    r"\[yellow\]": "",
                    r"\[/yellow\]": "",
                    r"\[green\]": "",
                    r"\[/green\]": "",
                    r"\[red\]": "",
                    r"\[/red\]": "",
                    r"\[magenta\]": "",
                    r"\[/magenta\]": "",
                },
                regex=True,
            )

            if exp_type.endswith("csv"):
                df.to_csv(saved_path)
            elif exp_type.endswith("json"):
                df.reset_index(drop=True, inplace=True)
                df.to_json(saved_path)
            elif exp_type.endswith("xlsx"):
                # since xlsx does not support datetimes with timezones we need to remove it
                df = remove_timezone_from_dataframe(df)

                if sheet_name is None:  # noqa: SIM223
                    df.to_excel(
                        saved_path,
                        index=True,
                        header=True,
                    )
                else:
                    save_to_excel(df, saved_path, sheet_name)

            elif saved_path.suffix in [".jpg", ".pdf", ".png", ".svg"]:
                if figure is None:
                    console.print("No plot to export.")
                    continue
                figure.show(export_image=saved_path, margin=margin)
            else:
                console.print("Wrong export file specified.")
                continue

            console.print(f"Saved file: {saved_path}")

        if figure is not None:
            figure._exported = True  # pylint: disable=protected-access


def system_clear():
    """Clear screen."""
    os.system("cls||clear")  # nosec # noqa: S605,S607


# Write an abstract helper to make requests from a url with potential headers and params
def request(
    url: str, method: str = "get", timeout: int = 0, **kwargs
) -> requests.Response:
    """Abstract helper to make requests from a url with potential headers and params.

    Parameters
    ----------
    url : str
        Url to make the request to
    method : str
        HTTP method to use.  Choose from:
        delete, get, head, patch, post, put, by default "get"
    timeout : int
        How many seconds to wait for the server to send data

    Returns
    -------
    requests.Response
        Request response object

    Raises
    ------
    ValueError
        If invalid method is passed
    """
    method = method.lower()
    if method not in ["delete", "get", "head", "patch", "post", "put"]:
        raise ValueError(f"Invalid method: {method}")
    current_user = get_platform_user()
    # We want to add a user agent to the request, so check if there are any headers
    # If there are headers, check if there is a user agent, if not add one.
    # Some requests seem to work only with a specific user agent, so we want to be able to override it.
    headers = kwargs.pop("headers", {})
    timeout = timeout or current_user.preferences.request_timeout

    if "User-Agent" not in headers:
        headers["User-Agent"] = get_user_agent()
    func = getattr(requests, method)
    return func(
        url,
        headers=headers,
        timeout=timeout,
        **kwargs,
    )
