"""Analyst Estimates Standard Model."""

from datetime import date as dateType
from typing import List, Literal, Optional, Set, Union

from pydantic import Field, field_validator

from openbb_core.provider.abstract.data import Data, ForceInt
from openbb_core.provider.abstract.query_params import QueryParams
from openbb_core.provider.utils.descriptions import (
    DATA_DESCRIPTIONS,
    QUERY_DESCRIPTIONS,
)


class AnalystEstimatesQueryParams(QueryParams):
    """Analyst Estimates Query."""

    symbol: str = Field(description=QUERY_DESCRIPTIONS.get("symbol", ""))
    period: Literal["quarter", "annual"] = Field(
        default="annual", description=QUERY_DESCRIPTIONS.get("period", "")
    )
    limit: int = Field(default=30, description=QUERY_DESCRIPTIONS.get("limit", ""))

    @field_validator("symbol", mode="before", check_fields=False)
    @classmethod
    def upper_symbol(cls, v: Union[str, List[str], Set[str]]):
        """Convert symbol to uppercase."""
        if isinstance(v, str):
            return v.upper()
        return ",".join([symbol.upper() for symbol in list(v)])


class AnalystEstimatesData(Data):
    """Analyst Estimates data."""

    symbol: Optional[str] = Field(
        default=None,
        description=DATA_DESCRIPTIONS.get("symbol", ""),
    )
    date: Optional[dateType] = Field(
        default=None,
        description=DATA_DESCRIPTIONS.get("date", ""),
    )
    estimated_revenue_low: Optional[ForceInt] = Field(
        default=None, description="Estimated revenue low."
    )
    estimated_revenue_high: Optional[ForceInt] = Field(
        default=None, description="Estimated revenue high."
    )
    estimated_revenue_avg: Optional[ForceInt] = Field(
        default=None, description="Estimated revenue average."
    )
    estimated_ebitda_low: Optional[ForceInt] = Field(
        default=None, description="Estimated EBITDA low."
    )
    estimated_ebitda_high: Optional[ForceInt] = Field(
        default=None, description="Estimated EBITDA high."
    )
    estimated_ebitda_avg: Optional[ForceInt] = Field(
        default=None, description="Estimated EBITDA average."
    )
    estimated_ebit_low: Optional[ForceInt] = Field(
        default=None, description="Estimated EBIT low."
    )
    estimated_ebit_high: Optional[ForceInt] = Field(
        default=None, description="Estimated EBIT high."
    )
    estimated_ebit_avg: Optional[ForceInt] = Field(
        default=None, description="Estimated EBIT average."
    )
    estimated_net_income_low: Optional[ForceInt] = Field(
        default=None, description="Estimated net income low."
    )
    estimated_net_income_high: Optional[ForceInt] = Field(
        default=None,
        description="Estimated net income high.",
    )
    estimated_net_income_avg: Optional[ForceInt] = Field(
        default=None,
        description="Estimated net income average.",
    )
    estimated_sga_expense_low: Optional[ForceInt] = Field(
        default=None,
        description="Estimated SGA expense low.",
    )
    estimated_sga_expense_high: Optional[ForceInt] = Field(
        default=None,
        description="Estimated SGA expense high.",
    )
    estimated_sga_expense_avg: Optional[ForceInt] = Field(
        default=None,
        description="Estimated SGA expense average.",
    )
    estimated_eps_avg: Optional[float] = Field(
        default=None, description="Estimated EPS average."
    )
    estimated_eps_high: Optional[float] = Field(
        default=None, description="Estimated EPS high."
    )
    estimated_eps_low: Optional[float] = Field(
        default=None, description="Estimated EPS low."
    )
    number_analyst_estimated_revenue: Optional[ForceInt] = Field(
        default=None,
        description="Number of analysts who estimated revenue.",
    )
    number_analysts_estimated_eps: Optional[ForceInt] = Field(
        default=None,
        description="Number of analysts who estimated EPS.",
    )
