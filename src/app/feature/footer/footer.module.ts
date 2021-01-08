import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { FooterComponent } from './components/footer.component';
import { portfolioTwitter, portfolioGithub, portfolioEnvelope } from 'src/app';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
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
