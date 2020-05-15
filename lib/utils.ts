import {
  DailyData,
  KeywordResult,
  SearchResults,
  TransformedQuote,
  TransformedSearchResult,
} from "./types.ts";

export const transformStockQuotes = (
  stockQuotes: Record<string, DailyData>,
): TransformedQuote[] => {
  return Object.entries(stockQuotes).map(([date, dailyData]) => {
    return {
      date: new Date(date),
      open: Number(dailyData["1. open"]),
      high: Number(dailyData["2. high"]),
      low: Number(dailyData["3. low"]),
      close: Number(dailyData["4. close"]),
      volume: Number(dailyData["5. volume"]),
    };
  });
};

export const transformStockSearchResults = (
  searchResults: KeywordResult[],
): TransformedSearchResult[] => {
  return searchResults.map((match: KeywordResult) => {
    return {
      symbol: match["1. symbol"],
      name: match["2. name"],
      type: match["3. type"],
      region: match["4. region"],
      marketOpen: match["5. marketOpen"],
      marketClose: match["6. marketClose"],
      timezone: match["7. timezone"],
      currency: match["8. currency"],
      matchScore: Number(match["9. matchScore"]),
    };
  });
};
