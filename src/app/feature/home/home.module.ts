import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'src/app/shared/button/button.module';

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
    RouterModule.forChild(homeRoutes),
  ],
})
export class HomeModule { }
