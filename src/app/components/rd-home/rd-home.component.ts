import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RdPostService } from '../../services/rd-post.service';

@Component({
    selector: 'rd-home',
    templateUrl: './rd-home.component.html',
    styleUrls: ['./rd-home.component.scss']
})
export class RdHomeComponent implements OnInit {
    posts: Array<Object> = [];
    loadingPosts: Boolean = true;

    constructor(private rdPost: RdPostService, private route: ActivatedRoute) {
    }

    getSubreddit() {
        let subreddit = this.route.snapshot.paramMap.get('subreddit');

        if (!subreddit) {
            subreddit = 'all';
        }

        return subreddit;
    }

    syncPosts() {
        this.loadingPosts = true;

        this.rdPost.getPosts({
            subreddit: this.getSubreddit(),
            sort: 'hot'
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
