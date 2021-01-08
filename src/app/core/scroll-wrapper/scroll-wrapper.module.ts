import {
  Component,
  Injectable,
  NgModule,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NgScrollbar, NgScrollbarModule } from 'ngx-scrollbar';
import { BehaviorSubject } from 'rxjs';

export interface IScrollWrapperState {
  disabled: boolean;
}

@Component({
  selector: 'portfolio-scroll-wrapper',
  template: `
    <ng-scrollbar
      [disabled]="state.disabled">
      <ng-content></ng-content>
    </ng-scrollbar>
  `,
  styles: [`
    ng-scrollbar {
      height: 100vh;
      width: 100vw;
    },
  `],
})
export class ScrollWrapperComponent {
  @ViewChild(NgScrollbar, { static: true }) scrollbar: NgScrollbar;

  state: IScrollWrapperState;

  constructor(
    private scrollWrapperService: ScrollWrapperService,
    private render: Renderer2,
  ) {
    this.scrollWrapperService
      .scrollWrapper$
      .subscribe(state => {
        this.state = state;
        if (this.scrollbar) {
          this.render.setStyle(
            this.scrollbar.viewport.nativeElement,
            'overflow-y',
            this.state.disabled ? 'hidden' : 'auto',
          );
        }
      });
  }
}

@Injectable({ providedIn: 'root' })
export class ScrollWrapperService {
  private scrollWrapperState = new BehaviorSubject<IScrollWrapperState>({
    disabled: false,
  });
  readonly scrollWrapper$ = this.scrollWrapperState.asObservable();

  update(state: Partial<IScrollWrapperState>): void {
    this.scrollWrapperState.next({
      ...this.scrollWrapperState.value,
      ...state,
    });
  }
}

@NgModule({
  declarations: [ScrollWrapperComponent],
  imports: [NgScrollbarModule],
  exports: [ScrollWrapperComponent],
})
export class ScrollWrapperModule { }
