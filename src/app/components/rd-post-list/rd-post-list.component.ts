import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rd-post-list',
  templateUrl: './rd-post-list.component.html',
  styleUrls: ['./rd-post-list.component.scss']
})
export class RdPostListComponent implements OnInit {
  @Input() posts: Array<Object>;

  constructor() { }

  ngOnInit() {

  }

}
