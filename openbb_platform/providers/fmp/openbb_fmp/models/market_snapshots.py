"""FMP Market Snapshots Model."""

from datetime import (
    date as dateType,
    datetime,
)
from typing import Any, Dict, List, Optional, Union

from dateutil import parser
from openbb_core.provider.abstract.data import ForceInt
from openbb_core.provider.abstract.fetcher import Fetcher
from openbb_core.provider.standard_models.market_snapshots import (
    MarketSnapshotsData,
    MarketSnapshotsQueryParams,
)
from openbb_fmp.utils.definitions import EXCHANGES
from openbb_fmp.utils.helpers import get_data
from pydantic import Field, field_validator


class FMPMarketSnapshotsQueryParams(MarketSnapshotsQueryParams):
    """FMP Market Snapshots Query.

    Source: https://site.financialmodelingprep.com/developer/docs#exchange-prices-quote
    """

    market: EXCHANGES = Field(
        description="The market to fetch data for.", default="nasdaq"
    )


class FMPMarketSnapshotsData(MarketSnapshotsData):
    """FMP Market Snapshots Data."""

    __alias_dict__ = {
        "high": "dayHigh",
        "low": "dayLow",
        "prev_close": "previousClose",
        "change_percent": "changesPercentage",
        "last_price": "price",
        "last_price_timestamp": "timestamp",
        "shares_outstanding": "sharesOutstanding",
        "volume_avg": "avgVolume",
    }

    last_price: Optional[float] = Field(
        description="The last price of the stock.", default=None
    )
    last_price_timestamp: Optional[Union[datetime, dateType]] = Field(
        description="The timestamp of the last price.", default=None
    )
    ma50: Optional[float] = Field(
        description="The 50-day moving average.", alias="priceAvg50", default=None
    )
    ma200: Optional[float] = Field(
        description="The 200-day moving average.", alias="priceAvg200", default=None
    )
    year_high: Optional[float] = Field(
        description="The 52-week high.", alias="yearHigh", default=None
    )
    year_low: Optional[float] = Field(
        description="The 52-week low.", alias="yearLow", default=None
    )
    volume_avg: Optional[ForceInt] = Field(
        description="Average daily trading volume.", default=None
    )
    market_cap: Optional[ForceInt] = Field(
        description="Market cap of the stock.", alias="marketCap", default=None
    )
    eps: Optional[float] = Field(description="Earnings per share.", default=None)
    pe: Optional[float] = Field(description="Price to earnings ratio.", default=None)
    shares_outstanding: Optional[ForceInt] = Field(
        description="Number of shares outstanding.",
        default=None,
    )
    name: Optional[str] = Field(
        description="The company name associated with the symbol.", default=None
    )
    exchange: Optional[str] = Field(
        description="The exchange of the stock.", default=None
    )
    earnings_date: Optional[Union[datetime, dateType]] = Field(
        description="The upcoming earnings announcement date.",
        alias="earningsAnnouncement",
        default=None,
    )

    @field_validator("last_price_timestamp", mode="before", check_fields=False)
    @classmethod
    def validate_timestamp(cls, v):
        """Validate the timestamp."""
        if isinstance(v, (int, float)) and v != 0:
            try:
                v = datetime.fromtimestamp(v)
                if v.hour == 0 and v.minute == 0 and v.second == 0:
                    v = v.date()
                return v
            except ValueError:
                return None
        return None

    @field_validator("earnings_date", mode="before", check_fields=False)
    @classmethod
    def date_validate(cls, v):  # pylint: disable=E0213
        """Validate the ISO date string."""
        if v and ":" in str(v):
            v = parser.isoparse(str(v))
            if v.hour == 0 and v.minute == 0 and v.second == 0:
                return v.date()
            return v
        return parser.parse(str(v)).date() if v else None

    @field_validator(
        "shares_outstanding",
        "volume",
        "volume_avg",
        "change",
        "ma50",
        "ma200",
        "eps",
        "pe",
        "market_cap",
        "year_high",
        "year_low",
        mode="before",
        check_fields=False,
    )
    @classmethod
    def validate_empty_numbers(cls, v):
        """Validate empty fields."""
        return v if v != 0 else None

    @field_validator("name", mode="before", check_fields=False)
    @classmethod
    def validate_empty_strings(cls, v):
        """Validate the name."""
        return v if v and v != " " and v != "''" else None

    @field_validator("change_percent", mode="before", check_fields=False)
    @classmethod
    def normalize_percent(cls, v):
        """Return the percent value as a normalized value."""
        return float(v) / 100 if v else None


class FMPMarketSnapshotsFetcher(
    Fetcher[
        FMPMarketSnapshotsQueryParams,
        List[FMPMarketSnapshotsData],
    ]
):
    """Transform the query, extract and transform the data from the FMP endpoints."""

    @staticmethod
    def transform_query(params: Dict[str, Any]) -> FMPMarketSnapshotsQueryParams:
        """Transform the query params."""
        return FMPMarketSnapshotsQueryParams(**params)

    @staticmethod
    async def aextract_data(
        query: FMPMarketSnapshotsQueryParams,
        credentials: Optional[Dict[str, str]],
        **kwargs: Any,
    ) -> List[Dict]:
        """Return the raw data from the FMP endpoint."""
        api_key = credentials.get("fmp_api_key") if credentials else ""
        url = f"https://financialmodelingprep.com/api/v3/quotes/{query.market}?apikey={api_key}"

        return await get_data(url, **kwargs)

    @staticmethod
    def transform_data(
        query: FMPMarketSnapshotsQueryParams, data: List[Dict], **kwargs: Any
    ) -> List[FMPMarketSnapshotsData]:
        """Return the transformed data."""
        return [FMPMarketSnapshotsData.model_validate(d) for d in data]
