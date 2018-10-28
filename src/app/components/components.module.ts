import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { TranslateModule } from '@ngx-translate/core';

import { RdHomeComponent } from './rd-home/rd-home.component';
import { RdPostListComponent } from './rd-post-list/rd-post-list.component';
import { RdPostComponent } from './rd-post/rd-post.component';
import { RdAppNavigationComponent } from './rd-app-navigation/rd-app-navigation.component';
import { RdSubredditSelectComponent } from './rd-subreddit-select/rd-subreddit-select.component';
import { RdPostSortSelectComponent } from './rd-post-sort-select/rd-post-sort-select.component';
import { RdUserMenuComponent } from './rd-user-menu/rd-user-menu.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        TranslateModule
    ],
    exports: [RdAppNavigationComponent],
    declarations: [
        RdHomeComponent,
        RdPostListComponent,
        RdPostComponent,
        RdAppNavigationComponent,
        RdSubredditSelectComponent,
        RdPostSortSelectComponent,
        RdUserMenuComponent
    ]
})
export class ComponentsModule { }
