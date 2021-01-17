import {
    Component,
    ElementRef,
    Input,
    NgModule,
    ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { myIcons } from 'src/app/svg/my-icons.model';
import { TimelineMax } from 'gsap';

export type IButtonSize = 's' | 'm' | 'l';
export type IButtonType = 'primary' | 'secondary';

@Component({
  selector: 'portfolio-button',
  template: `
    <button
      #button
      class="
        py-3
        rounded-3xl
        font-bold
        shadow-secondary"
      [ngClass]="[
        applySize(),
        applyType()
      ]"
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
  @Input() size: IButtonSize = 'm';
  @Input() type: IButtonType = 'primary';

  applySize(): string {
    switch (this.size) {
      case 's': return 'px-2';
      case 'm': return 'px-5';
      case 'l': return 'px-10';
    }
  }

  applyType(): string {
    if (this.type === 'primary') {
      return 'bg-accent hover:bg-accent-light text-black';
    } else {
      return 'border-2 border-accent text-tertiary hover:bg-accent-transparent';
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
  imports: [CommonModule],
  exports: [ButtonComponent],
})
export class ButtonModule { }
