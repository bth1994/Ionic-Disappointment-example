import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CustomHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustomHttpProvider {

  constructor(public http: HttpClient) {

  }

  getSingle<T> (id: number) {
    return this.http.get<T>(`http://google.com/${id}`);
  }

  post<T>(item: any) {
    return this.http.post<T>(`http://google.com/`, item);
  }

  put<T>(id: number, item: any) {
    return this.http.put<T>(`http://google.com/${id}`, item);
  }

  delete(id:number) {
    return this.http.delete(`http://google.com${id}`);
  }
}
