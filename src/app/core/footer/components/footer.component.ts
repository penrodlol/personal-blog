import { Component } from '@angular/core';
import { PORTFOLIO_ROUTES } from 'src/app/app-routing.module';

export interface ISocial {
  name: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'portfolio-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly ROUTES = PORTFOLIO_ROUTES;
  readonly SOCIALS: ReadonlyArray<ISocial> = [
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/penrodlol' },
    { name: 'Github', icon: 'github', url: 'https://github.com/penrodlol' },
    { name: 'Email', icon: 'envelope', url: 'mailto:penrod.christian7984@gmail.com' },
  ];
}
