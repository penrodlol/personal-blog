import { Component } from '@angular/core';
import { NxViewportService, NxBreakpoints } from '@aposin/ng-aquila/utils';
import { PORTFOLIO_ROUTES } from 'src/app/app-routing.module';

@Component({
  selector: 'portfolio-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly ROUTES = PORTFOLIO_ROUTES;
  readonly SOCIALS: ReadonlyArray<{ icon: string, url: string }> = [
    { icon: 'twitter', url: 'https://twitter.com/penrodlol' },
    { icon: 'github', url: 'https://github.com/penrodlol' },
    { icon: 'envelope', url: 'mailto:penrod.christian7984@gmail.com' },
  ];

  hideDivider$ = this.viewport.min(NxBreakpoints.BREAKPOINT_MEDIUM);

  constructor(
    private viewport: NxViewportService,
  ) { }
}
