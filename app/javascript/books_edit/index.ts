import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode  } from '@angular/core';

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule);
});

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
  console.log('enabled production mode')
  }
}
