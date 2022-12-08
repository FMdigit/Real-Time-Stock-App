import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import Stock from '../models/stock';

@Injectable({
  providedIn: 'root',
})
export class SocketIoService {
  constructor(private socket: Socket) {}

  // emit event ...
  sendMessage(msg: string, data?: string) {
    this.socket.emit(msg, data);
  }

  // listen event ...
  getMessage(msg: string): Observable<Stock[]> {
    return this.socket.fromEvent(msg);
  }
}
