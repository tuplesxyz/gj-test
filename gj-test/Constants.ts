export interface IMapLabels {
  high: string;
  low: string;
  last: string;
  bid: string;
  vwap: string;
  ask: string;
  open: string;
  volume: string;
  timestamp: string;
}

export const mapLabels: IMapLabels = {
  high: "Highest price in the last 24hrs",
  low: "Lowest price in the last 24hrs",
  last: "Last price",
  bid: "Highest bid",
  vwap: "Volume weighted average price",
  ask: "Lowest ask",
  open: "Open price",
  volume: "Volume",
  timestamp: "Timestamp",
};

export interface IPair {
  name?: string;
  trading: string;
  base_decimals: number;
  url_symbol: string;
  instant_and_market_orders: string;
  minimum_order: string;
  counter_decimals: number;
  description: string;

}

export interface IHomepageProps {
  tradingPairs: IPair[];
  atv: string;
  initialTradingPairData: IPair;
}
