import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockItemComponent } from './stock-item/stock-item.component';
import { SwitchComponent } from './switch/switch.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockService } from 'src/app/services/stock.service';
import { SocketIoService } from 'src/app/services/socket-io.service';

@NgModule({
  imports: [CommonModule],
  declarations: [StockListComponent, StockItemComponent, SwitchComponent],
  exports: [StockListComponent],
  providers: [StockService, SocketIoService],
})
export class StockModule {}
