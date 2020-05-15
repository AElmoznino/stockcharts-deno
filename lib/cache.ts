import {
  Cache,
} from "https://deno.land/x/dash/mod.ts";
import { green, yellow } from "https://deno.land/std@0.51.0/fmt/colors.ts";

const cache = new Cache({ serialize: true });

export const cacheSet = (key: string, value: any) => cache.set(key, value);

export const cacheGet = (key: string) => {
  const cachedResult = cache.get(key);
  if (cachedResult) {
    console.log(
      green(`Returning results for ${key} found in cache`),
    );
    return cachedResult;
  }

  console.log(
    yellow(`No results for ${key} found in cache, fetching from API`),
  );
};
