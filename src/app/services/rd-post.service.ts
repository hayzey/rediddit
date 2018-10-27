import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RdPostService {

  constructor(private http: HttpClient) {

  }

  // getPosts(subreddit: string = 'all', sort: string = 'top') {
  getPosts({ subreddit = 'all', sort = 'hot' }: { subreddit: string, sort: string } = {}) {
    let url = `https://api.reddit.com/r/${subreddit}/${sort}/`;

    return this.http.get(url).pipe(
      // tap(_ => console.log(`Synched posts for ${subName}`)),
      // catchError(console.error(`Error synching posts for ${subName}`))
    );
  }
}
