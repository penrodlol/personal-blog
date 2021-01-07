import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FooterComponent } from './components/footer.component';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports: [
    FooterComponent,
  ]
})
export class FooterModule { }
