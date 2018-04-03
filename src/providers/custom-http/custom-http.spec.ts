import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CustomHttpProvider } from './custom-http';

describe('CustomHttpProvider', () => {

  let service: CustomHttpProvider;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomHttpProvider]
     });

    service = TestBed.get(CustomHttpProvider);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should get the correct star wars character', () => {
    service.getSingle(1).subscribe((data: any) => {
      expect(data.name).toBe('Luke Skywalker');
    });

    const req = httpMock.expectOne(`http://google.com/1`, 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush({
      name: 'Luke Skywalker'
    });

    httpMock.verify();

  });

  it('should post the correct data', () => {
    service.post<any>({ firstname: 'firstname' }).subscribe((data: any) => {
      expect(data.firstname).toBe('firstname');
    });

    const req = httpMock.expectOne(`http://google.com/`, 'post to api');
    expect(req.request.method).toBe('POST');

    req.flush({
      firstname: 'firstname'
    });
    httpMock.verify();
  })

});

