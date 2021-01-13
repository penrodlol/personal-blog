import {
  Directive,
  ElementRef,
  NgModule,
  Renderer2,
} from '@angular/core';
import { ScrollWrapperService } from '../scroll-wrapper/scroll-wrapper.module';

@Directive({ selector: '[portfolioRouterOutletWrapper]' })
export class RouterOutletWrapperDirective {
  constructor(
    private routerOutlet: ElementRef,
    private renderer: Renderer2,
    private scrollWrapperService: ScrollWrapperService,
  ) {
    this.scrollWrapperService
      .select('menuToggled')
      .subscribe(menuToggled => {
        menuToggled ?
          this.renderer.setStyle(
            this.routerOutlet.nativeElement,
            'filter',
            'blur(10px)',
          ) :
          this.renderer.removeStyle(
            this.routerOutlet.nativeElement,
            'filter',
          );
      });
  }
}

@NgModule({
  declarations: [RouterOutletWrapperDirective],
  exports: [RouterOutletWrapperDirective],
})
export class RouterOutletWrapperModule { }
