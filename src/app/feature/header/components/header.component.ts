import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NxMenuComponent } from '@aposin/ng-aquila/menu';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('menu_wrapper') menuWrapper: ElementRef;

  menuToggled = false;

  links = ['Projects', 'Blog'];

  constructor(
    private renderer: Renderer2,
  ) { }

  onMenuToggle(menu: NxMenuComponent): void {
    if (this.menuToggled) {
      this.renderer.addClass(this.menuWrapper.nativeElement, 'header__menu--opened');
      setTimeout(() => this.handleMenuToggle(menu), 300);
    } else {
      this.renderer.removeClass(this.menuWrapper.nativeElement, 'header__menu--opened');
      this.handleMenuToggle(menu);
    }
  }

  private handleMenuToggle(menu: NxMenuComponent): void {
    this.menuToggled = !this.menuToggled;
    menu.toggle();
  }
}
