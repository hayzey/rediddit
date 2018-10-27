import { Component, OnInit } from '@angular/core';
import { RdPostService } from '../../services/rd-post.service';

@Component({
  selector: 'rd-home',
  templateUrl: './rd-home.component.html',
  styleUrls: ['./rd-home.component.scss']
})
export class RdHomeComponent implements OnInit {
  posts: Array<Object> = [];

  constructor(private rdPost: RdPostService) {
  }

  syncPosts() {
      // this.rdPost.getPosts('videos').subscribe();
      this.rdPost.getPosts({
          subreddit: 'videos'
      }).subscribe();
  }

  ngOnInit() {
    this.syncPosts();
  }

}
