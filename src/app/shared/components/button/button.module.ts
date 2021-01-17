import { Component, ElementRef, Input, NgModule, ViewChild } from '@angular/core';
import { myIcons } from 'src/app/svg/my-icons.model';
import { TimelineMax } from 'gsap';

export type IButtonSize = 's' | 'm' | 'l';

@Component({
  selector: 'portfolio-button',
  template: `
    <button
      #button
      class="
        relative
        py-3
        bg-accent
        rounded-3xl
        text-black
        font-bold
        shadow-secondary
        hover:bg-accent-light"
      [class]="applySize()"
      (click)=onClick()>
      {{text}}
    </button>
  `,
  styles: [`
    button:focus { outline: none; }
  `],
})
export class ButtonComponent {
  @ViewChild('button') button: ElementRef;

  @Input() text: string;
  @Input() icon: myIcons;
  @Input() size: IButtonSize;

  applySize(): string {
    switch (this.size) {
      case 's': return 'px-2';
      case 'm': return 'px-5';
      case 'l': return 'px-10';
      default: return 'px-5';
    }
  }

  onClick(): void {
    new TimelineMax()
      .to(this.button.nativeElement, 0.1, { y: 3 })
      .to(this.button.nativeElement, 0.1, { y: 0 });
  }
}

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonModule { }
