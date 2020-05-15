import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { getDailyStockQuotes } from "./routes/stocks.ts";
const router = new Router();

router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/stocks/:symbol", async (context) => {
    let quotes;
    if (context.params && context.params.symbol) {
      quotes = await getDailyStockQuotes(context.params.symbol);
    }
    context.response.body = quotes;
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 3000 });
