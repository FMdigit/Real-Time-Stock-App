import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { StockService } from './stock.service';

describe('StockService', () => {
  let service: StockService;
  let httpContoller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(StockService);
    httpContoller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('stocks request chacking', () => {
    service.getStocks().subscribe();
    const req = httpContoller.expectOne(service.apiUrl);
    //request should be a GET method
    expect(req.request.method).toEqual('GET');
  });
});
