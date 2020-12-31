import {
  Component,
  Directive,
  ElementRef,
  HostListener,
  NgModule,
  Renderer2
} from '@angular/core';

@Directive({ selector: '[pbHamburger]' })
export class HamburgerDirective {
  menuToggled = true;

  constructor(
    private hamburger: ElementRef,
    private renderer: Renderer2,
  ) { }

  @HostListener('click')
  onClick(){
    this.menuToggled
      ? this.renderer.addClass(this.hamburger.nativeElement, 'opened')
      : this.renderer.removeClass(this.hamburger.nativeElement, 'opened');
    this.menuToggled = !this.menuToggled;
  }
}

@Component({
  selector: 'pb-hamburger',
  template: `
    <div
      pbHamburger
      class="hamburger">
      <div class="hamburger__layers"></div>
    </div>
  `,
  styleUrls: ['./hamburger.scss'],
})
export class HamburgerComponent { }

@NgModule({
  declarations: [
    HamburgerComponent,
    HamburgerDirective,
  ],
  exports: [
    HamburgerComponent,
  ],
})
export class HamburgerModule { }
