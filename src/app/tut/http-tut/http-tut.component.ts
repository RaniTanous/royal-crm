import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-http-tut',
  templateUrl: './http-tut.component.html',
  styleUrls: ['./http-tut.component.scss'],
})
export class HttpTutComponent implements OnInit, OnDestroy {
  url: string = 'https://jsonplaceholder.typicode.com/posts';

  counter: any;
  asTest: any;
  constructor(private http: HttpClient) {
    console.log('constructor');

    this.asTest = interval(2000).pipe(
      map((x) => `test ran ${x}`),
      tap((x) => console.log(x))
    );
  }

  data: any;

  get(id: string) {
    if (id) {
      this.data = this.http.get<Post>(`${this.url}/${id}`);
      return;
    }
    this.data = this.http.get<Post[]>(this.url);

    // this.http
    //   .get<Post[]>(this.url)
    // .pipe(
    //   map((posts) => {
    //     return posts.map((post) => post.title);
    //   })
    // )
    // .subscribe((data) => {
    //   this.data = data;
    // });
  }

  post(json: string) {
    this.data = this.http.post<Post>(this.url, JSON.parse(json));
  }

  patch(id: string, json: string) {
    this.data = this.http.patch<Post>(`${this.url}/${id}`, JSON.parse(json));
  }

  delete(id: string) {
    this.data = this.http.delete(`${this.url}/${id}`);
  }

  // handle subscriptions so they will not run after component is dead
  subscriptions: Subscription[] = [];
  ngOnInit(): void {
    console.log('init');
    const s1 = interval(2000)
      .pipe(tap((x) => console.log(x)))
      .subscribe((c) => (this.counter = c));

    this.subscriptions.push(s1);
  }
  ngOnDestroy() {
    console.log('destroy');
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
