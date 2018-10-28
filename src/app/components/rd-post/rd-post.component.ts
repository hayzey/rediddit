import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'rd-post',
    templateUrl: './rd-post.component.html',
    styleUrls: ['./rd-post.component.scss']
})
export class RdPostComponent implements OnInit {
    @Input() post: {
        data: Object
    };

    constructor() { }

    openPost() {}

    getPost() {
        return this.post.data;
    }

    ngOnInit() {
    }

}
