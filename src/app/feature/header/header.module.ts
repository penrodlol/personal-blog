import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NxHeaderModule } from '@aposin/ng-aquila/header';
import { NxLinkModule } from '@aposin/ng-aquila/link';
import { NxMenuModule } from '@aposin/ng-aquila/menu';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import { HeaderComponent } from './components/header.component';
import { HamburgerModule } from 'src/app/core/hamburger/hamburger.module';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HamburgerModule,
    NxHeaderModule,
    NxLinkModule,
    NxMenuModule,
    NxIconModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule { }
