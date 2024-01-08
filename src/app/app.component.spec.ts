import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {ThemeSelectorService} from 'theme-selector';

describe('AppComponent ', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppComponent
      ],
      providers: [
        {
          provide: ThemeSelectorService,
          useValue: jasmine.createSpyObj('ThemeSelectorService', ['select'])
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
