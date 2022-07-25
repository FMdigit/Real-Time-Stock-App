import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { SocketIoService } from 'src/app/services/socket-io.service';
import { StockService } from 'src/app/services/stock.service';
import { environment } from 'src/environments/environment';
import { StockListComponent } from './stock-list.component';

describe('StockListComponent', () => {
  let component: StockListComponent;
  let fixture: ComponentFixture<StockListComponent>;
  const socketConfig: SocketIoConfig = {
    url: environment.host,
    options: { transports: ['websocket'] },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockListComponent],
      providers: [StockService, SocketIoService, HttpClient, HttpHandler],
      imports: [SocketIoModule.forRoot(socketConfig)],
    }).compileComponents();

    fixture = TestBed.createComponent(StockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
