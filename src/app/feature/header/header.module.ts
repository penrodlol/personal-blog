import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NxHeaderModule } from '@aposin/ng-aquila/header';
import { NxLinkModule } from '@aposin/ng-aquila/link';
import { HeaderComponent } from './components/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NxHeaderModule,
    NxLinkModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule { }
