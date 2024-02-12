"""ESG Risk Rating Standard Model."""

from datetime import date as dateType
from typing import List, Literal, Optional, Set, Union

from pydantic import Field, field_validator

from openbb_core.provider.abstract.data import Data
from openbb_core.provider.abstract.query_params import QueryParams
from openbb_core.provider.utils.descriptions import (
    DATA_DESCRIPTIONS,
    QUERY_DESCRIPTIONS,
)


class ESGRiskRatingQueryParams(QueryParams):
    """ESG Risk Rating Query."""

    symbol: str = Field(description=QUERY_DESCRIPTIONS.get("symbol", ""))

    @field_validator("symbol", mode="before", check_fields=False)
    @classmethod
    def upper_symbol(cls, v: str) -> str:
        """Convert symbol to uppercase."""
        return v.upper()


class ESGRiskRatingData(Data):
    """ESG Risk Rating Data."""

    date: Optional[dateType] = Field(
        default=None, description=DATA_DESCRIPTIONS.get("date", "")
    )
    symbol: Optional[str] = Field(
        default=None, description=DATA_DESCRIPTIONS.get("symbol", "")
    )
    cik: Optional[Union[int, str]] = Field(
        default=None, description=DATA_DESCRIPTIONS.get("cik", "")
    )
    company_name: Optional[str] = Field(
        default=None, description="Company name of the company."
    )
    industry: Optional[str] = Field(
        description="Industry of the company.",
        default=None,
    )
    year: Optional[int] = Field(
        default=None, description="Year of the ESG risk rating."
    )
    esg_risk_rating: Optional[
        Literal["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"]
    ] = Field(description="ESG risk rating of the company.")
    industry_rank: Optional[str] = Field(
        default=None, description="Industry rank of the company."
    )
