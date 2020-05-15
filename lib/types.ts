export interface MetaData {
  "1. Information": string;
  "2. Symbol": string;
  "3. Last Refreshed": string;
  "4. Output Size": string;
  "5. Time Zone": string;
}

export interface DailyData {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

export interface QuoteResponse {
  "Meta Data": MetaData;
  "Time Series (Daily)": DailyData[];
  "Error Message"?: string;
}

export interface TransformedQuote {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
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
