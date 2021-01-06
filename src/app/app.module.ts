import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './feature/header/header.module';
import { ScrollWrapperModule } from './core/scroll-wrapper/scroll-wrapper.module';
import { WaveModule } from './core/wave/wave.module';
import { FooterModule } from './feature/footer/footer.module';
import { AppStartupService } from './app-startup.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    WaveModule,
    HeaderModule,
    FooterModule,
    ScrollWrapperModule,
    NgScrollbarModule,
  ],
  providers: [
    AppStartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: (startup: AppStartupService) => () => startup.init(),
      deps: [AppStartupService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
