import { Component, OnInit } from '@angular/core';
import { RdPostService } from '../../services/rd-post.service';

@Component({
    selector: 'rd-home',
    templateUrl: './rd-home.component.html',
    styleUrls: ['./rd-home.component.scss']
})
export class RdHomeComponent implements OnInit {
    posts: Array<Object> = [];
    loadingPosts: Boolean = true;

    constructor(private rdPost: RdPostService) {
    }

    syncPosts() {
        this.loadingPosts = true;

        this.rdPost.getPosts({
            subreddit: 'videos',
            sort: 'new'
        }).subscribe((posts: { data: { children: Array<Object> } }) => {
            console.info('Synched Posts', posts);
            this.posts = posts.data.children;
            this.loadingPosts = false;
        });
    }

    ngOnInit() {
        this.syncPosts();
    }

}
