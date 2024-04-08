"""Rich Module"""

__docformat__ = "numpy"

from typing import Dict, Iterable, List, Optional, Tuple, Union

import i18n
from openbb import obb
from rich import panel
from rich.console import Console, Theme
from rich.progress import track
from rich.text import Text

from openbb_terminal.core.plots.terminal_style import theme
from openbb_terminal.core.session.current_settings import get_current_settings

# https://rich.readthedocs.io/en/stable/appendix/colors.html#appendix-colors
# https://rich.readthedocs.io/en/latest/highlighting.html#custom-highlighters


RICH_TAGS = [
    "[menu]",
    "[/menu]",
    "[cmds]",
    "[/cmds]",
    "[info]",
    "[/info]",
    "[param]",
    "[/param]",
    "[src]",
    "[/src]",
    "[help]",
    "[/help]",
]

USE_COLOR = True


def translate(key: str):
    return i18n.t(key)


def no_panel(renderable, *args, **kwargs):  # pylint: disable=unused-argument
    return renderable


def get_ordered_list_sources(command_path: str) -> List:
    """
    Returns the preferred source for the given command.

    Parameters
    ----------
    command_path: str
        The command to find the source for. E.g. "/equity/price/historical

    Returns
    -------
    List
        The list of sources for the given command.
    """
    command_reference = obb.reference.get("paths", {}).get(command_path, {})
    if command_reference:
        providers = list(command_reference["parameters"].keys())
        return [provider for provider in providers if provider != "standard"]
    return []


class MenuText:
    """Create menu text with rich colors to be displayed by terminal"""

    def __init__(self, path: str = "", column_sources: int = 100):
        """Initialize menu help

        Parameters
        ----------
        path : str
            path to the menu that is being created
        column_sources : int
            column width from which to start displaying sources
        """
        self.menu_text = ""
        self.menu_path = path
        self.col_src = column_sources
        self.warnings: List[Dict[str, str]] = []

    def add_raw(self, raw_text: str):
        """Append raw text (no translation) to a menu

        Parameters
        ----------
        raw_text : str
            raw text to be appended to the menu
        """
        self.menu_text += raw_text

    def add_custom(self, key: str):
        """Append custom text (after translation from key) to a menu

        Parameters
        ----------
        key : str
            key to get translated text and add to the menu
        """
        self.menu_text += f"{i18n.t(self.menu_path + key)}"

    def add_info(self, key_info: str):
        """Append info text (after translation from key) to a menu

        Parameters
        ----------
        key_info : str
            key to get translated text and add to the menu as info
        """
        self.menu_text += f"[info]{i18n.t(self.menu_path + key_info)}:[/info]\n"

    def add_param(self, key_param: str, value: str, col_align: int = 0):
        """Append info text (after translation from key) to a menu

        Parameters
        ----------
        key_param : str
            key to get translated text and add to the menu as parameter
        value : str
            value to display in front of the parameter
        col_align : int
            column alignment for the value. This allows for a better UX experience.
        """
        parameter_translated = i18n.t(self.menu_path + key_param)
        space = (
            (col_align - len(parameter_translated)) * " "
            if col_align > len(parameter_translated)
            else ""
        )
        self.menu_text += f"[param]{parameter_translated}{space}:[/param] {value}\n"

    def _adjust_command_length(self, key_command: str) -> str:
        """Adjust the length of the command if it is too long

        Parameters
        ----------
        key_command : str
            command to be adjusted

        Returns
        -------
        str
            adjusted command
        """
        if len(key_command) > 18:
            new_key_command = key_command[:18]  # Default to trimming to 18 characters

            if "_" in key_command:
                key_command_split = key_command.split("_")

                new_key_command = (
                    "_".join(key_command_split[:2])
                    if len(key_command_split) > 2
                    else key_command_split[0]
                )

                if len(new_key_command) > 18:
                    new_key_command = new_key_command[:18]

            if new_key_command != key_command:
                self.warnings.append(
                    {
                        "warning": "Command name too long",
                        "command": key_command,
                        "trimmed_command": new_key_command,
                    }
                )
                key_command = new_key_command

        return key_command

    def _handle_command_description(
        self, key_command: str, command_description: str
    ) -> str:
        """Handle the command description

        Parameters
        ----------
        key_command : str
            command to be adjusted
        command_description : str
            description of the command

        Returns
        -------
        str
            adjusted command description
        """
        if not command_description:
            command_description = i18n.t(self.menu_path + key_command)
            if command_description == self.menu_path + key_command:
                command_description = ""
        return (
            command_description[:88] + "..."
            if len(command_description) > 91
            else command_description
        )

    def add_cmd(
        self, key_command: str, condition: bool = True, command_description: str = ""
    ):
        """Append command text (after translation from key) to a menu

        Parameters
        ----------
        key_command : str
            key command to be executed by user. It is also used as a key to get description of command.
        condition : bool
            condition in which command is available to user. I.e. displays command and description.
            If condition is false, the command line is greyed out.
        """
        key_command = self._adjust_command_length(key_command)
        command_description = self._handle_command_description(
            key_command, command_description
        )
        spacing = (23 - (len(key_command) + 4)) * " "

        cmd = f"{key_command}{spacing}{command_description}"
        cmd = f"[cmds]    {cmd}[/cmds]" if condition else f"[unvl]    {cmd}[/unvl]"

        sources = get_ordered_list_sources(f"{self.menu_path}{key_command}")

        if sources:
            space = (self.col_src - len(cmd)) * " " if self.col_src > len(cmd) else " "
            cmd += f"{space}[src][{', '.join(sources)}][/src]"

        self.menu_text += cmd + "\n"

    def add_menu(
        self,
        key_menu: str,
        condition: Optional[Union[bool, str]] = True,
        menu_description: str = "",
    ):
        """Append menu text (after translation from key) to a menu

        Parameters
        ----------
        key_menu : str
            key menu to be executed by user. It is also used as a key to get description of menu.
        condition : bool
            condition in which menu is available to user. I.e. displays menu and description.
            If condition is false, the menu line is greyed out.
        """
        spacing = (23 - (len(key_menu) + 4)) * " "

        if menu_description:
            menu = f"{key_menu}{spacing}{menu_description}"
        else:
            menu_description = i18n.t(self.menu_path + key_menu)
            if menu_description == self.menu_path + key_menu:
                menu_description = ""
            menu = f"{key_menu}{spacing}{menu_description}"

        if condition:
            self.menu_text += f"[menu]>   {menu}[/menu]\n"
        else:
            self.menu_text += f"[unvl]>   {menu}[/unvl]\n"

    def add_setting(self, key_setting: str, status: bool = True):
        """Append menu text (after translation from key) to a menu

        Parameters
        ----------
        key_setting : str
            key setting to be set by user. It is also used as a key to get description of the setting.
        status : bool
            status of the current setting. If true the line will be green, otherwise red.
        """
        spacing = (23 - (len(key_setting) + 4)) * " "
        if status:
            self.menu_text += f"[green]    {key_setting}{spacing}{i18n.t(self.menu_path + key_setting)}[/green]\n"
        else:
            self.menu_text += f"[red]    {key_setting}{spacing}{i18n.t(self.menu_path + key_setting)}[/red]\n"


class ConsoleAndPanel:
    """Create a rich console to wrap the console print with a Panel"""

    def __init__(self):
        self.preferences = get_current_settings()
        self.__console = Console(
            theme=Theme(theme.console_style), highlight=False, soft_wrap=True
        )
        self.menu_text = ""
        self.menu_path = ""

    def reload_console(self):
        self.preferences = get_current_settings()
        theme.apply_console_style(self.preferences.RICH_STYLE)
        self.__console = Console(
            theme=Theme(theme.console_style), highlight=False, soft_wrap=True
        )

    def capture(self):
        return self.__console.capture()

    @staticmethod
    def filter_rich_tags(text):
        for val in RICH_TAGS:
            text = text.replace(val, "")

        return text

    @staticmethod
    def blend_text(
        message: str, color1: Tuple[int, int, int], color2: Tuple[int, int, int]
    ) -> Text:
        """Blend text from one color to another."""
        text = Text(message)
        r1, g1, b1 = color1
        r2, g2, b2 = color2
        dr = r2 - r1
        dg = g2 - g1
        db = b2 - b1
        size = len(text) + 5
        for index in range(size):
            blend = index / size
            color = f"#{int(r1 + dr * blend):02X}{int(g1 + dg * blend):02X}{int(b1 + db * blend):02X}"
            text.stylize(color, index, index + 1)
        return text

    def print(self, *args, **kwargs):
        self.reload_console()
        if kwargs and "text" in list(kwargs) and "menu" in list(kwargs):
            if not get_current_settings().TEST_MODE:
                if get_current_settings().ENABLE_RICH_PANEL:
                    if get_current_settings().SHOW_VERSION:
                        version = get_current_settings().VERSION
                        version = f"[param]OpenBB Platform CLI v{version}[/param] (https://openbb.co)"
                    else:
                        version = (
                            "[param]OpenBB Platform CLI[/param] (https://openbb.co)"
                        )
                    self.__console.print(
                        panel.Panel(
                            "\n" + kwargs["text"],
                            title=kwargs["menu"],
                            subtitle_align="right",
                            subtitle=version,
                        )
                    )

                else:
                    self.__console.print(kwargs["text"])
            else:
                print(self.filter_rich_tags(kwargs["text"]))  # noqa: T201
        elif not get_current_settings().TEST_MODE:
            self.__console.print(*args, **kwargs)
        else:
            print(*args, **kwargs)  # noqa: T201

    def input(self, *args, **kwargs):
        self.print(*args, **kwargs, end="")
        return input()


console = ConsoleAndPanel()


def optional_rich_track(
    inputs: Iterable,
    suppress_output: bool = False,
    desc: str = "",
    total: Optional[int] = None,
):
    """Generate a rich track progress bar if desired

    Parameters
    ----------
    inputs : Iterable
        The items to be looped through
    suppress_output : bool, optional
        Flag to suppress the output, by default False
    desc : str, optional
        String to describe the progress bar, by default ""
    total : Optional[int], optional
        Total number of items to be looped through, by default None
    """
    if suppress_output:
        return inputs
    return track(inputs, description=desc, total=total)
