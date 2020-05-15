import { TransformedQuote, TransformedSearchResult } from "../types.ts";
import { transformStockQuotes, transformStockSearchResults } from "../utils.ts";
import { get } from "./api.ts";

export const getDailyStockQuotes = async (
  symbol: string,
): Promise<TransformedQuote[]> => {
  const result = await get(`function=TIME_SERIES_DAILY&symbol=${symbol}`);

  return transformStockQuotes(result["Time Series (Daily)"]);
};

export const getStocksByKeywords = async (
  keywords: string,
): Promise<TransformedSearchResult[]> => {
  const result = await get(
    `function=SYMBOL_SEARCH&keywords=${keywords}`,
  );

  return transformStockSearchResults(result.bestMatches);
};
