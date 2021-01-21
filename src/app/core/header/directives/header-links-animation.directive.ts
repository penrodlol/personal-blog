import {
  AfterViewInit,
  ContentChildren,
  Directive,
  ElementRef,
  OnDestroy,
  QueryList,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TimelineMax } from 'gsap';
import { BehaviorSubject, of } from 'rxjs';
import {
  concatMap,
  filter,
  map,
  tap,
} from 'rxjs/operators';

@UntilDestroy()
@Directive({
  selector: '[portfolioHeaderLinksAnimation]',
  queries: { links: new ContentChildren('links') }
})
export class HeaderLinksAnimationDirective implements AfterViewInit, OnDestroy {
  private previousRoute = new BehaviorSubject<ElementRef>(null);
  private links: QueryList<ElementRef>;
  private timeline: TimelineMax;

  constructor(
    private router: Router,
  ) { }

  ngAfterViewInit(): void {
    this.timeline = new TimelineMax();

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(({ url }: NavigationEnd) =>
          this.links.find(({ nativeElement }) => {
            return nativeElement.textContent.toLowerCase().trim() === url.split('/').pop().trim().toLowerCase();
          })?.nativeElement.querySelector('#underline')
        ),
        concatMap((event, index) => of(event).pipe(tap(link => {
            if (index === 0 && link) {
              this.timeline.set(link, {
                width: '100%',
              });
            } else {
              if (this.previousRoute.getValue()) {
                this.timeline.to(this.previousRoute.getValue(), 0.1, {
                  width: 0,
                });
              }
            }
        }))),
        untilDestroyed(this),
      )
      .subscribe(underline => {
        this.previousRoute.next(underline);
        if (underline) {
          this.timeline.to(underline, 0.8, {
            width: '100%',
            ease: 'bounce',
          });
        }
      });
  }

  ngOnDestroy(): void { this.timeline.kill(); }
}
