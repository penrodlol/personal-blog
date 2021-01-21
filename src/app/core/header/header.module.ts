import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { HamburgerModule } from 'src/app/core/hamburger/hamburger.module';
import { HeaderLinksAnimationDirective } from './directives/header-links-animation.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLinksAnimationDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HamburgerModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule { }
