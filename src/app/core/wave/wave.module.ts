import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollThresholdService } from '../scroll-wrapper/scroll-wrapper.module';

@Component({
  selector: 'portfolio-wave',
  template: `
    <ng-container *ngIf="(hideWave$ | async) === false">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        [style.min-width.px]=1920>
        <path
          fill="var(--ui-02)"
          fill-opacity="1"
          d="M0,96L60,90.7C120,85,240,75,360,90.7C480,107,600,149,720,154.7C840,160,960,128,1080,101.3C1200,75,1320,53,1380,42.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
        </path>
      </svg>
    </ng-container>
  `
  })
export class PortfolioWaveComponent {
  hideWave$ = this.scrollThresholdService.scrollThreshold$;

  constructor(
    private scrollThresholdService: ScrollThresholdService
  ) { }
}

@NgModule({
  declarations: [PortfolioWaveComponent],
  imports: [CommonModule],
  exports: [PortfolioWaveComponent],
})
export class WaveModule { }
