import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatProgressSpinnerModule
    ],
    declarations: []
})
export class MaterialModule { }
