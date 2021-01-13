import {
  Component,
  Injectable,
  NgModule,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NgScrollbar, NgScrollbarModule } from 'ngx-scrollbar';
import { BehaviorSubject } from 'rxjs';
import { pluck } from 'rxjs/operators';

export interface IScrollWrapperState {
  menuToggled: boolean;
}

@Component({
  selector: 'portfolio-scroll-wrapper',
  template: `
    <ng-scrollbar
      [disabled]="state.menuToggled">
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
            this.state.menuToggled ? 'hidden' : 'auto',
          );
        }
      });
  }
}

@Injectable({ providedIn: 'root' })
export class ScrollWrapperService {
  private scrollWrapperState = new BehaviorSubject<IScrollWrapperState>({
    menuToggled: false,
  });
  readonly scrollWrapper$ = this.scrollWrapperState.asObservable();

  select(key: keyof IScrollWrapperState) {
    return this.scrollWrapperState.pipe(pluck(key));
  }

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
