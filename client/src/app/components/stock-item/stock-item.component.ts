import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Stock from 'src/app/models/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
})
export class StockItemComponent implements OnInit {
  @Input() stock?: Stock;
  @Output() switchClick: EventEmitter<Stock> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSwitchClick(isActive: boolean) {
    if (this.stock) this.stock.isActive = isActive;
    this.switchClick.emit(this.stock);
  }
}
