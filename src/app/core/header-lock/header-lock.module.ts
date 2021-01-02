import { CommonModule } from '@angular/common';
import { Directive, Injectable, NgModule } from '@angular/core';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { BehaviorSubject, of } from 'rxjs';
import { debounceTime, switchMap, tap } from 'rxjs/operators';

@Directive({ selector: '[portfolioHeaderLock]' })
export class HeaderLockDirective {
  private readonly THRESHOLD = 159;

  constructor(
    private scrollbar: PerfectScrollbarComponent,
    private headerLockService: HeaderLockService,
  ) {
    this.scrollbar.psScrollY
      .pipe(
        debounceTime(200),
        switchMap(() => of(
          this.scrollbar
            .directiveRef
            .elementRef
            .nativeElement
            .scrollTop >= this.THRESHOLD
        )),
        tap(console.log),
      )
      .subscribe(state => this.headerLockService.update(state));
  }
}

@Injectable({ providedIn: 'root' })
export class HeaderLockService {
  private headerLockStore = new BehaviorSubject<boolean>(false);
  readonly headerLock$ = this.headerLockStore.asObservable();

  update(state: boolean): void { this.headerLockStore.next(state); }
}

@NgModule({
  declarations: [HeaderLockDirective],
  imports: [CommonModule],
  exports: [HeaderLockDirective],
})
export class HeaderLockModule { }
