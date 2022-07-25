export default interface Stock {
  shortName: string;
  longName: string;
  symbol: string;
  currentPrice: number;
  dayHigh: number;
  dayLow: number;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;
  regularMarketChangePercent: number;
  currencySymbol: string;
  isActive: boolean;
}
