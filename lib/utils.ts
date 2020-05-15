import { DailyData, TransformedQuote } from "./types.ts";

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

export default transformStockQuotes;
