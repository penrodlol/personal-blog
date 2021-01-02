import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(PerfectScrollbarComponent, { static: false }) scrollbar: PerfectScrollbarComponent;

  isHeaderLocked = false;

  constructor(
    private changeDetector: ChangeDetectorRef,
  ) { }

  onScroll() {
    this.isHeaderLocked = this.scrollbar
      .directiveRef
      .elementRef
      .nativeElement
      .scrollTop >= 159;
    this.changeDetector.detectChanges();
  }
}
