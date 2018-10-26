import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RoutingModule
  ],
  exports: [
      MaterialModule
  ],
  declarations: []
})
export class SharedModule { }
