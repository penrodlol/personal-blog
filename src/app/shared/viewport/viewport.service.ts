import { Injectable } from '@angular/core';
import { fromEvent, merge, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export type PortfolioBreakpoint = 'S' | 'M' | 'L'| 'XL' | '2XL';
const portfolioBreakpointsMap = new Map<string, number>([
  ['S', 640],
  ['M', 768],
  ['L', 1024],
  ['XL', 1280],
  ['2XL', 1536],
]);

@Injectable({ providedIn: 'root' })
export class ViewportService {
  isGreaterThan(breakpoint: PortfolioBreakpoint): Observable<boolean> {
    return merge(
      of(window.innerWidth),
      fromEvent(window, 'resize').pipe(
        map(({ target }: any) => target.innerWidth)
      ),
    ).pipe(
      map(width => portfolioBreakpointsMap.get(breakpoint) > width)
    );
  }
}
