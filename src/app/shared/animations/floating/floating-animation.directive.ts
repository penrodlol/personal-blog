import {
  Directive,
  ElementRef,
  NgModule,
  OnDestroy,
} from '@angular/core';
import { Sine, TimelineMax } from 'gsap';

@Directive({ selector: '[portfolioFloatingAnimation]' })
export class FloatingAnimationDirective implements OnDestroy {
  private readonly DURATION = 5;
  private timeline = new TimelineMax({
    paused: true,
    repeat: -1,
    yoyo: true,
  });

  constructor({ nativeElement }: ElementRef) {
    this.timeline
      .to(nativeElement, this.DURATION, {
        x: 5,
        y: -5,
        rotation: 5,
        ease: Sine.easeInOut,
      })
      .to(nativeElement, this.DURATION, {
        x: -5,
        y: -10,
        rotation: 3,
        ease: Sine.easeInOut,
      })
      .to(nativeElement, this.DURATION, {
        x: 0,
        y: 0,
        rotation: 0,
        ease: Sine.easeInOut,
      })
      .play();
  }

  ngOnDestroy(): void { this.timeline.kill(); }
}

@NgModule({
  declarations: [FloatingAnimationDirective],
  exports: [FloatingAnimationDirective],
})
export class FloatingAnimationModule { }
