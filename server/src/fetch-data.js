var yahooFinance = require("yahoo-finance");
var modules = ["price", "summaryDetail", "financialData"];

class DataFetcher {
  getQuote = async (symbol) => {
    const data = await yahooFinance.quote({ symbol, modules });
    return {
      shortName: data.price.shortName,
      longName: data.price.longName,
      symbol: data.price.symbol,
      regularMarketChangePercent: data.price.regularMarketChangePercent,
      currentPrice: data.financialData.currentPrice,
      dayHigh: data.summaryDetail.dayHigh,
      dayLow: data.summaryDetail.dayLow,
      fiftyTwoWeekHigh: data.summaryDetail.fiftyTwoWeekHigh,
      fiftyTwoWeekLow: data.summaryDetail.fiftyTwoWeekLow,
      currencySymbol: data.price.currencySymbol,
      isActive: true,
    };
  };
}

module.exports = DataFetcher;
