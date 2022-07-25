const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http, { cors: { origin: "*" } });
const cors = require("cors");
const schedule = require("node-schedule");
const DataFetcher = require("./fetch-data");
const config = require("./config");
const mockData = require("./mock");

app.use(cors());

const db = mockData;
const SYMBOLS = ["AAPL", "MSFT", "GOOGL", "TSLA"];
let dataFetcher = new DataFetcher();
let symbolIndex = 0;

schedule.scheduleJob(config.jobInterval, async () => {
  const data = await dataFetcher.getQuote(SYMBOLS[symbolIndex]);
  db[SYMBOLS[symbolIndex]] = data;
  if (symbolIndex < SYMBOLS.length - 1) symbolIndex++;
  else symbolIndex = 0;
});

io.on("connection", (socket) => {
  let interval = null;
  socket.on("disconnect", () => {
    clearInterval(interval);
  });

  socket.on("getStocks", (data) => {
    interval = setInterval(() => {
      socket.emit("getStocks", Object.values(db));
    }, config.pushInterval);
  });
});

app.get("/stocks", function (req, res, next) {
  res.json(Object.values(db));
});

http.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});
