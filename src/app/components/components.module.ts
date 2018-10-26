import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';

import { RdHomeComponent } from './rd-home/rd-home.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [RdHomeComponent]
})
export class ComponentsModule { }
