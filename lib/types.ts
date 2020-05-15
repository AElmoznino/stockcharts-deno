/* BASE TYPES */
export interface DailyData {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
}

export interface TransformedQuote {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
}

/* STOCKS TYPES */
export interface StocksMetaData {
  "1. Information": string;
  "2. Symbol": string;
  "3. Last Refreshed": string;
  "4. Output Size": string;
  "5. Time Zone": string;
}

export interface StocksDailyData extends DailyData {
  "5. volume": string;
}

export interface QuoteResponse {
  "Meta Data": StocksMetaData;
  "Time Series (Daily)": StocksDailyData[];
  "Error Message"?: string;
}

export interface TransformedStockQuote extends TransformedQuote {
  volume: number;
}

export interface TransformedSearchResult {
  currency: string;
  marketClose: string;
  marketOpen: string;
  matchScore: number;
  name: string;
  region: string;
  symbol: string;
  timezone: string;
  type: string;
}
/* KEYWORDS TYPES */
export interface KeywordResult {
  "1. symbol": string;
  "2. name": string;
  "3. type": "Equity" | "ETF" | "Mutual Fund";
  "4. region": string;
  "5. marketOpen": string;
  "6. marketClose": string;
  "7. timezone": string;
  "8. currency": string;
  "9. matchScore": string;
}

export interface SearchResults {
  bestMatches: KeywordResult[];
}

/* FX TYPES */

export interface FXMetaData {
  "1. Information": string;
  "2. From Symbol": string;
  "3. To Symbol": string;
  "4. Output Size": string;
  "5. Last Refreshed": string;
  "6. Time Zone": string;
}

export interface FXResponse {
  "Meta Data": FXMetaData;
  "Time Series FX (Daily)": DailyData[];
  "Error Message"?: string;
}
