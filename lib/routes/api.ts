import { config } from "https://deno.land/x/dotenv/mod.ts";

const { ALPHA_VANTAGE_API_KEY, ALPHA_VANTAGE_API_URL } = config();

export const get = async (path: string): Promise<any> => {
  const res = await fetch(
    `${ALPHA_VANTAGE_API_URL}&apikey=${ALPHA_VANTAGE_API_KEY}&${path}`,
  );

  const parsed = await res.json();

  if (parsed["Error Message"]) {
    throw new Error("No matching stock");
  }

  return parsed;
};
