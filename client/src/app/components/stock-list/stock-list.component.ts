import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { SocketIoService } from 'src/app/services/socket-io.service';
import Stock from 'src/app/models/stock';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
})
export class StockListComponent implements OnInit {
  stocks: Array<Stock> = [];
  switchStates: Record<string, boolean | undefined> = {};

  constructor(
    private stockService: StockService,
    private socketIoService: SocketIoService
  ) {}

  ngOnInit(): void {
    //fist we will get the data form REST API, to get all stocks
    this.stockService.getStocks().subscribe((res: Stock[]) => {
      this.stocks = res;
    });

    //second we stablish a ws(using socket.io) connection and send 'getStocks' message
    //to tell the server that we want to receive stocks.
    this.socketIoService.sendMessage('getStocks');
    this.socketIoService.getMessage('getStocks').subscribe((res: Stock[]) => {
      //anfter receiving data we will update the stock object
      this.updateStocks(res);
    });
  }

  onSwitchClick(stock: Stock) {
    //when user clickes on switch button
    //the event will pass tow layer up to thes component
    //so we can stor the state of each card to keep track of which one is active.
    this.setSwitchStates(stock);
  }

  setSwitchStates(stock: Stock) {
    this.switchStates[stock.symbol] = stock.isActive;
  }

  updateStocks(stocks: Stock[]) {
    //this functions basically updates the stock property of this component by
    //finding which stock is active and then upate that stock in stocks property
    const inActiveStocks = Object.keys(this.switchStates).filter(
      (s) => !this.switchStates[s]
    );
    stocks.map((stock: Stock) => {
      if (!inActiveStocks.includes(stock.symbol)) {
        const oldStockIndex = this.stocks.findIndex(
          (os) => os.symbol === stock.symbol
        );
        if (oldStockIndex === -1) {
          this.stocks.push(stock);
        } else {
          this.stocks[oldStockIndex] = stock;
        }
      }
    });
  }
}
