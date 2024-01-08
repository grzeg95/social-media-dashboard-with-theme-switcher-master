import {APP_INITIALIZER, ModuleWithProviders, NgModule} from '@angular/core';
import {THEMES} from './injectors';
import {Config} from './models';
import {ThemeSelectorService} from './theme-selector.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: []
})
export class ThemeSelectorModule {
  static forRoot(config: Config): ModuleWithProviders<ThemeSelectorModule> {
    return {
      ngModule: ThemeSelectorModule,
      providers: [
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
      ]
    };
  }
}


