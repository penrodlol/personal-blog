import {
    Component,
    ElementRef,
    Input,
    NgModule,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { myIcons } from 'src/app/svg/my-icons.model';
import { TimelineMax, Expo } from 'gsap';

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
export class ButtonComponent implements OnInit, OnDestroy {
  @ViewChild('button') button: ElementRef;

  @Input() text: string;
  @Input() icon: myIcons;
  @Input() size: IButtonSize = 'm';
  @Input() type: IButtonType = 'primary';

  timeline: TimelineMax;

  ngOnInit(): void {
    this.timeline = new TimelineMax({ paused: true });
  }

  ngOnDestroy(): void { this.timeline.kill(); }

  applySize(): string {
    switch (this.size) {
      case 's': return 'px-2';
      case 'm': return 'px-5';
      case 'l': return 'px-10';
    }
  }

  applyType(): string {
    if (this.type === 'primary') {
      return 'bg-accent hover:bg-accent-light text-primary border-2 border-gray-900';
    } else {
      return 'border-2 border-accent text-accent-light hover:bg-accent-transparent';
    }
  }

  onClick(): void {
    this.timeline
      .to(this.button.nativeElement, 0.1, {
        y: 3,
        ease: Expo.easeInOut

      })
      .to(this.button.nativeElement, 0.2, {
        y: 0,
      })
      .play();
  }
}

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule],
  exports: [ButtonComponent],
})
export class ButtonModule { }
