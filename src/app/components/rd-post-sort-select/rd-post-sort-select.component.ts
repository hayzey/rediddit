import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'rd-post-sort-select',
    templateUrl: './rd-post-sort-select.component.html',
    styleUrls: ['./rd-post-sort-select.component.scss']
})
export class RdPostSortSelectComponent implements OnInit {
    sortOptions: Array<Object> = [];

    constructor() {

    }

    setSortOptions() {
        this.sortOptions = [
            {
                option: 'best',
                translateKey: 'POST_SORT_OPTION_BEST'
            },
            {
                option: 'hot',
                translateKey: 'POST_SORT_OPTION_HOT'
            },
            {
                option: 'new',
                translateKey: 'POST_SORT_OPTION_NEW'
            },
            {
                option: 'top',
                translateKey: 'POST_SORT_OPTION_TOP'
            },
            {
                option: 'rising',
                translateKey: 'POST_SORT_OPTION_RISING'
            },
            {
                option: 'random',
                translateKey: 'POST_SORT_OPTION_RANDOM'
            },
            {
                option: 'controversial',
                translateKey: 'POST_SORT_OPTION_CONTROVERSIAL'
            },
        ];
    }

    ngOnInit() {
        this.setSortOptions();
    }

}
