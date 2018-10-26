import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rd-home',
  templateUrl: './rd-home.component.html',
  styleUrls: ['./rd-home.component.scss']
})
export class RdHomeComponent implements OnInit {

  constructor() {
      this.posts = [];
  }

  syncPosts() {
      
  }

  ngOnInit() {
      this.syncPosts();
  }

}
