import { config } from "https://deno.land/x/dotenv/mod.ts";
import { TransformedQuote, TransformedSearchResult } from "../types.ts";
import { transformStockQuotes, transformStockSearchResults } from "../utils.ts";

const { ALPHA_VANTAGE_API_KEY, ALPHA_VANTAGE_API_URL } = config();

export const getDailyStockQuotes = async (
  symbol: string,
): Promise<TransformedQuote[]> => {
  const res = await fetch(
    `${ALPHA_VANTAGE_API_URL}TIME_SERIES_DAILY&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`,
  );

  const parsed = await res.json();

  if (parsed["Error Message"]) {
    throw new Error("No matching stock");
  }

  return transformStockQuotes(parsed["Time Series (Daily)"]);
};

export const getStocksByKeywords = async (
  keywords: string,
): Promise<TransformedSearchResult[]> => {
  const res = await fetch(
    `${ALPHA_VANTAGE_API_URL}SYMBOL_SEARCH&keywords=${keywords}&apikey=${ALPHA_VANTAGE_API_KEY}`,
  );
  const parsed = await res.json();

  if (parsed["Error Message"]) {
    throw new Error("No matching stocks");
  }

  return transformStockSearchResults(parsed.bestMatches);
};
