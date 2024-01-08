import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideThemeSelector} from 'theme-selector';
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideThemeSelector({
      themes: {
        names: ['light', 'dark'],
        default: 'dark'
      }
    })
  ]
};
