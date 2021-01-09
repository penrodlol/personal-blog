import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header.component';
import { HamburgerModule } from 'src/app/core/hamburger/hamburger.module';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    HamburgerModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule { }
