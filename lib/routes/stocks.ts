import { TransformedStockQuote, TransformedSearchResult } from "../types.ts";
import { transformStockQuotes, transformStockSearchResults } from "../utils.ts";
import { get } from "./api.ts";
import { cacheSet, cacheGet } from "../cache.ts";

export const getDailyStockQuotes = async (
  symbol: string,
): Promise<TransformedStockQuote[]> => {
  const result = await get(`function=TIME_SERIES_DAILY&symbol=${symbol}`);

  return transformStockQuotes(result["Time Series (Daily)"]);
};

export const getStocksByKeywords = async (
  keywords: string,
): Promise<TransformedSearchResult[]> => {
  if (cacheGet(keywords)) return cacheGet(keywords);

  const result = await get(
    `function=SYMBOL_SEARCH&keywords=${keywords}`,
  );
  const transformed = transformStockSearchResults(result.bestMatches);

  cacheSet(keywords, transformed);

  return transformed;
};
