import {APP_INITIALIZER, EnvironmentProviders, makeEnvironmentProviders} from '@angular/core';
import {THEMES} from './injectors';
import {Config} from './models';
import {ThemeSelectorService} from './theme-selector.service';

export function provideThemeSelector(config: Config): EnvironmentProviders {
  return makeEnvironmentProviders([
    ThemeSelectorService,
    {
      provide: THEMES,
      useValue: config.themes
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ThemeSelectorService],
      useFactory: (themeSelectorService: ThemeSelectorService) => {
        return () => {
          themeSelectorService.selectDefault();
        };
      }
    }
  ]);
}
