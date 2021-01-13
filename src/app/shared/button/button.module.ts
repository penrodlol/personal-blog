import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { myIcons } from 'src/app/svg/my-icons.model';

@Component({
  selector: 'portfolio-button',
  template: `
    <button
      class="
        py-3
        bg-accent
        rounded-3xl
        text-black
        font-bold
        shadow-secondary
        hover:bg-accent-light"
      [class]="applySize()">
      {{text}}
    </button>
  `,
})
export class ButtonComponent {
  @Input() text: string;
  @Input() icon: myIcons;
  @Input() size: 's' | 'm' | 'l';

  applySize(): string {
    switch (this.size) {
      case 's': return 'px-2';
      case 'm': return 'px-5';
      case 'l': return 'px-10';
      default: return 'px-5';
    }
  }
}

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule],
  exports: [ButtonComponent],
})
export class ButtonModule { }
