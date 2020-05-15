import { get } from "./api.ts";
import { TransformedQuote } from "../types.ts";
import { transformFXQuotes } from "../utils.ts";

export const getCurrencies = async (
  from: string,
  to: string,
): Promise<TransformedQuote[]> => {
  const result = await get(
    `function=FX_DAILY&from_symbol=${from}&to_symbol=${to}`,
  );
  return transformFXQuotes(result["Time Series FX (Daily)"]);
};
