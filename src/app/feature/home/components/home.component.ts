import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ViewportService } from 'src/app/shared/viewport/viewport.service';

@UntilDestroy()
@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showRocket$ = this.viewportService.observe$('M', true).pipe(untilDestroyed(this));

  constructor(
    private viewportService: ViewportService,
  ) { }

  ngOnInit(): void { }

}
