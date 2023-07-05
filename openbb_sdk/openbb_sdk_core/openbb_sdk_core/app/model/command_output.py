from typing import Dict, Generic, List, Optional, TypeVar

import pandas as pd
from pydantic import Field
from pydantic.generics import GenericModel

from openbb_sdk_core.app.model.abstract.error import Error
from openbb_sdk_core.app.model.abstract.export import Export
from openbb_sdk_core.app.model.abstract.tagged import Tagged
from openbb_sdk_core.app.model.abstract.warning import Warning_

T = TypeVar("T")


class CommandOutput(GenericModel, Generic[T], Tagged):
    results: Optional[T] = Field(
        default=None,
        description="Serializable results.",
    )
    warnings: Optional[List[Warning_]] = None
    error: Optional[Error] = None
    export_list: List[Export] = Field(
        default_factory=list,
        description="Exported data (csv, excel, jpeg, parquet, feather, hdf...).",
    )

    def __repr__(self) -> str:
        return (
            self.__class__.__name__
            + "\n\n"
            + "\n".join([f"{k}: {v}" for k, v in self.dict().items()])
        )

    def to_dataframe(self) -> pd.DataFrame:
        """Converts results field to pandas dataframe.

        Returns
        -------
        pd.DataFrame
            Pandas dataframe.
        """
        if self.results is None:
            raise ValueError("Results not found.")

        try:
            df = pd.DataFrame(self.dict()["results"])
            if "date" in df.columns:
                df = df.set_index("date")
        except ValueError:
            df = pd.DataFrame(self.dict()["results"], index=["values"]).T

        return df

    def to_lists(self, fields: Optional[List[str]] = None) -> Dict[str, List]:
        """Converts results field to list of values.

        Returns
        -------
        Dict[str, List]
            Dictionary of lists.
        """
        df = self.to_dataframe()
        target_fields = df.columns if fields is None else fields
        results = {}
        for field in target_fields:
            if field not in df.columns:
                choices = ", ".join(df.columns)
                raise ValueError(f"Field {field} not found, choose from: {choices}.")
            results[field] = df[field].tolist()
        return results
