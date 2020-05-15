import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { getDailyStockQuotes, getStocksByKeywords } from "./routes/stocks.ts";
import { getCurrencies } from "./routes/fx.ts";
const router = new Router();

router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/stocks/:symbol", async (context) => {
    if (context.params && context.params.symbol) {
      const quotes = await getDailyStockQuotes(context.params.symbol);
      context.response.body = quotes;
    } else {
      context.throw(404);
    }
  })
  .get("/search/:keywords", async (context) => {
    if (context.params && context.params.keywords) {
      const stocks = await getStocksByKeywords(context.params.keywords);
      context.response.body = stocks;
    } else {
      context.throw(404);
    }
  })
  .get("/fx/:from/:to", async (context) => {
    if (context.params && context.params.from && context.params.to) {
      const fx = await getCurrencies(context.params.from, context.params.to);
      context.response.body = fx;
    } else {
      context.throw(404);
    }
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 3000 });
