import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const PORTFOLIO_ROUTES: ReadonlyArray<string> = [
  'Projects',
  'Blog',
];

export type PortfolioRoute = typeof PORTFOLIO_ROUTES[number];

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
