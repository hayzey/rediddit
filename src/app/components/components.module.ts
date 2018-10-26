import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';

import { RdHomeComponent } from './rd-home/rd-home.component';
import { RdPostListComponent } from './rd-post-list/rd-post-list.component';
import { RdPostComponent } from './rd-post/rd-post.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [RdHomeComponent, RdPostListComponent, RdPostComponent]
})
export class ComponentsModule { }
