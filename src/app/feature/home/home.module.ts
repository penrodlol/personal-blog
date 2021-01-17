import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { FloatingAnimationModule } from 'src/app/shared/animations/floating/floating-animation.directive';

export const homeRoutes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FloatingAnimationModule,
    RouterModule.forChild(homeRoutes),
  ],
})
export class HomeModule { }
