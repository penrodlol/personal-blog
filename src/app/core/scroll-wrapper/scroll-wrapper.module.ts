import {
    AfterViewInit,
    Component,
    Injectable,
    NgModule,
    ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgScrollbar, NgScrollbarModule } from 'ngx-scrollbar';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'portfolio-scroll-wrapper',
  template: `
    <ng-scrollbar>
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
export class PortfolioScrollWrapperComponent implements AfterViewInit {
  @ViewChild(NgScrollbar, { static: true }) scrollbar: NgScrollbar;

  constructor(
    private scrollThresholdService: ScrollThresholdService,
    private route: ActivatedRoute,
  ) { }

  ngAfterViewInit(): void {
    this.route.url
      .pipe(filter(routes => routes[0]?.path === ''))
      .subscribe(() => {
        this.scrollbar.verticalScrolled
        .pipe(map(({ target }) => target.scrollTop))
        .subscribe(this.scrollThresholdService.update);
      });
  }
}

@Injectable({
  providedIn: 'root',
})
export class ScrollThresholdService {
  private readonly Y_THRESHOLD = 159;

  private scrollThresholdStore = new BehaviorSubject<boolean>(false);
  readonly scrollThreshold$ = this.scrollThresholdStore.asObservable();

  update = (yAxis: number) => this.scrollThresholdStore.next(yAxis >= this.Y_THRESHOLD);
}

@NgModule({
  declarations: [PortfolioScrollWrapperComponent],
  imports: [NgScrollbarModule],
  exports: [PortfolioScrollWrapperComponent],
})
export class ScrollWrapperModule { }
