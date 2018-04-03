import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  user: Observable<any>;

  constructor(public http: HttpClient) {
    this.post();
    this.get();
  }

  get() {
    this.user = this.http.get('http://jsonplaceholder.typicode.com/posts');
    this.user.subscribe(data => {
      console.log('my data: ', data);
    })
  }

  post() {

    const request = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .subscribe(response => {
        console.log(response);
      },
          err => {
        console.log("Error occurred");
      }
      );

  }

}
