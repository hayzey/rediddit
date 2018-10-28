import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RdHomeComponent } from './components/rd-home/rd-home.component';

const routes: Routes = [
    { path: '', component: RdHomeComponent, pathMatch: 'full' },
    { path: 'r/:subreddit', component: RdHomeComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
