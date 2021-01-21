import {
  Directive,
  ElementRef,
  NgModule,
  OnDestroy,
} from '@angular/core';
import { Sine, TimelineMax } from 'gsap';

@Directive({ selector: '[portfolioFloatingAnimation]' })
export class FloatingAnimationDirective implements OnDestroy {
  timeline = new TimelineMax({
    paused: true,
    repeat: -1,
    yoyo: true,
  });

  constructor({ nativeElement }: ElementRef) {
    this.timeline
      .set(nativeElement, {
        x: 0,
        y: 0,
        rotation: 0,
        ease: Sine.easeInOut,
      })
      .to(nativeElement, 5, {
        x: 5,
        y: -5,
        rotation: 5,
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
