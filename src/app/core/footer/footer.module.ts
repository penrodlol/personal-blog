import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { FooterComponent } from './components/footer.component';
import { portfolioTwitter, portfolioGithub, portfolioEnvelope } from 'src/app/common/svg';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    SvgIconsModule.forRoot({
      icons: [
        portfolioTwitter,
        portfolioGithub,
        portfolioEnvelope,
      ],
    }),
  ],
  exports: [
    FooterComponent,
  ]
})
export class FooterModule { }
