import { Directive, ElementRef, NgModule } from '@angular/core';
import { Sine, TimelineMax } from 'gsap';

@Directive({
  selector: '[portfolioFloatingAnimation]'
})
export class FloatingAnimationDirective {
  constructor({ nativeElement }: ElementRef) {
    new TimelineMax({ repeat: -1, yoyo: true })
      .set(nativeElement, { x: 0, y: 0, rotation: 0, ease: Sine.easeInOut })
      .to(nativeElement, 5, { x: 5, y: -5, rotation: 5, ease: Sine.easeInOut })
      .play();
  }
}

@NgModule({
  declarations: [FloatingAnimationDirective],
  exports: [FloatingAnimationDirective],
})
export class FloatingAnimationModule { }
