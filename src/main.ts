import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

gsap.registerPlugin(CSSPlugin);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
