import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NxFooterModule } from '@aposin/ng-aquila/footer';
import { NxIconModule } from '@aposin/ng-aquila/icon';

import { FooterComponent } from './components/footer.component';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NxFooterModule,
    NxIconModule,
  ],
  exports: [
    FooterComponent,
  ]
})
export class FooterModule { }
