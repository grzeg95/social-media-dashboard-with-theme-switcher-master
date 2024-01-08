import {APP_INITIALIZER} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {THEMES} from './injectors';
import {Config} from './models';
import {ThemeSelectorService} from './theme-selector.service';
import _ from 'lodash';

const howManyItemsAreInSecondArray = (A: any[], B: any[]) => {
  let cnt = 0;
  for (const a of A) {
    if (B.find((b) => _.isEqual(a, b))) {
      cnt++;
    }
  }
  return cnt;
}

describe('ThemeSelectorService', () => {
  let service: ThemeSelectorService;

  const config: Config = {
    themes: {
      names: ['light', 'dark'],
      default: 'dark'
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
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
    });
    service = TestBed.inject(ThemeSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('document has only default theme', () => {

    const classList: string[] = [];
    document.body.classList.forEach((className) => classList.push(className));
    const themeNamesOccurrences = howManyItemsAreInSecondArray(config.themes.names, classList);

    expect(themeNamesOccurrences === 1 && document.body.classList.contains(config.themes.default)).toBeTrue();
  });

  it(`document has only ${config.themes.names[0]} theme`, () => {

    service.select(config.themes.names[0]);

    const classList: string[] = [];
    document.body.classList.forEach((className) => classList.push(className));
    const themeNamesOccurrences = howManyItemsAreInSecondArray(config.themes.names, classList);

    expect(themeNamesOccurrences === 1 && document.body.classList.contains(config.themes.names[0])).toBeTrue();
  });

  it(`select 'any' - document has only default theme`, () => {

    service.select('any');

    const classList: string[] = [];
    document.body.classList.forEach((className) => classList.push(className));
    const themeNamesOccurrences = howManyItemsAreInSecondArray(config.themes.names, classList);

    expect(themeNamesOccurrences === 1 && document.body.classList.contains(config.themes.default)).toBeTrue();
  });

});
