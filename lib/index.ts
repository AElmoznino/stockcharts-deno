import {
  bold,
  green,
} from "https://deno.land/std@0.51.0/fmt/colors.ts";
import {
  Application,
  RouterContext,
  Router,
} from "https://deno.land/x/oak/mod.ts";
import { getDailyStockQuotes, getStocksByKeywords } from "./routes/stocks.ts";
import { getCurrencies } from "./routes/fx.ts";

const PORT = 3000;
const router = new Router();
const app = new Application();

router
  .get("/", (context: RouterContext) => {
    context.response.body = "Hello world!";
  })
  .get("/stocks/:symbol", async (context: RouterContext) => {
    if (context.params && context.params.symbol) {
      const quotes = await getDailyStockQuotes(context.params.symbol);
      context.response.body = quotes;
    } else {
      context.throw(404);
    }
  })
  .get("/search/:keywords", async (context: RouterContext) => {
    if (context.params && context.params.keywords) {
      const stocks = await getStocksByKeywords(context.params.keywords);
      context.response.body = stocks;
    } else {
      context.throw(404);
    }
  })
  .get("/fx/:from/:to", async (context: RouterContext) => {
    if (context.params && context.params.from && context.params.to) {
      const fx = await getCurrencies(context.params.from, context.params.to);
      context.response.body = fx;
    } else {
      context.throw(404);
    }
  });

app.use(router.routes());
app.use(router.allowedMethods());

console.log(
  bold("🚀 Start listening on ") + green(`http://localhost:${PORT}`),
);
await app.listen({ port: PORT });
