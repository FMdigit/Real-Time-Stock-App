import { TestBed } from '@angular/core/testing';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

import { SocketIoService } from './socket-io.service';
import { environment } from 'src/environments/environment';

describe('SocketIoService', () => {
  let service: SocketIoService;
  const socketConfig: SocketIoConfig = {
    url: environment.host,
    options: { transports: ['websocket'] },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SocketIoModule.forRoot(socketConfig)],
    });
    service = TestBed.inject(SocketIoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
