import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, OnInit, signal, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterOutlet} from '@angular/router';
import {ThemeSelectorService} from 'theme-selector';
import {AudienceCardComponent} from './features/components/audience-card/audience-card.component';
import {StatisticEventCardComponent} from './features/components/statistic-event-card/statistic-event-card.component';
import {SwitchComponent} from './features/components/switch/switch.component';
import {AudienceCard} from './features/models/audience-card';
import {StatisticEventCard} from './features/models/statistic-event-card';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AudienceCardComponent, StatisticEventCardComponent, FormsModule, SwitchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'app-root'
  }
})
export class AppComponent implements OnInit {

  totalAudience = signal(0);

  audiences: AudienceCard[] = [
    {
      typeOfCompany: 'Social',
      companyIcon: '/assets/images/icon-facebook.svg',
      altCompanyIcon: 'Facebook Logo',
      nick: '@nathanf',
      numberOfAudience: 1987,
      numberOfAudienceType: 'followers',
      numberOfAudienceOnDate: 12,
      audienceDate: 'Today',
      indicatorTopBorderColor: 'hsl(208, 92%, 53%)'
    },
    {
      typeOfCompany: 'Social',
      companyIcon: '/assets/images/icon-twitter.svg',
      altCompanyIcon: 'Twitter Logo',
      nick: '@nathanf',
      numberOfAudience: 1044,
      numberOfAudienceType: 'followers',
      numberOfAudienceOnDate: 99,
      audienceDate: 'Today',
      indicatorTopBorderColor: 'hsl(203, 89%, 53%)'
    },
    {
      typeOfCompany: 'Social',
      companyIcon: '/assets/images/icon-instagram.svg',
      altCompanyIcon: 'Instagram Logo',
      nick: '@realnathanf',
      numberOfAudience: 11000,
      numberOfAudienceType: 'followers',
      numberOfAudienceOnDate: 1099,
      audienceDate: 'Today',
      indicatorTopBorderColor: 'linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))'
    },
    {
      typeOfCompany: 'Video Publisher',
      companyIcon: '/assets/images/icon-youtube.svg',
      altCompanyIcon: 'Instagram Logo',
      nick: 'Nathan F.',
      numberOfAudience: 8239,
      numberOfAudienceType: 'followers',
      numberOfAudienceOnDate: -144,
      audienceDate: 'Today',
      indicatorTopBorderColor: 'hsl(348, 97%, 39%)'
    }
  ];

  statistics: StatisticEventCard[] = [
    {
      event: 'Page Views',
      companyIcon: '/assets/images/icon-facebook.svg',
      altCompanyIcon: 'Facebook Logo',
      eventCount: 87,
      eventCountRate: 3
    },
    {
      event: 'Likes',
      companyIcon: '/assets/images/icon-facebook.svg',
      altCompanyIcon: 'Facebook Logo',
      eventCount: 52,
      eventCountRate: -2
    },
    {
      event: 'Likes',
      companyIcon: '/assets/images/icon-instagram.svg',
      altCompanyIcon: 'Instagram Logo',
      eventCount: 54462,
      eventCountRate: 2257
    },
    {
      event: 'Profile Views',
      companyIcon: '/assets/images/icon-instagram.svg',
      altCompanyIcon: 'Instagram Logo',
      eventCount: 52000,
      eventCountRate: 1375
    },
    {
      event: 'Retweets',
      companyIcon: '/assets/images/icon-twitter.svg',
      altCompanyIcon: 'Twitter Logo',
      eventCount: 117,
      eventCountRate: 303
    },
    {
      event: 'Likes',
      companyIcon: '/assets/images/icon-twitter.svg',
      altCompanyIcon: 'Twitter Logo',
      eventCount: 507,
      eventCountRate: 553
    },
    {
      event: 'Likes',
      companyIcon: '/assets/images/icon-youtube.svg',
      altCompanyIcon: 'Youtube Logo',
      eventCount: 107,
      eventCountRate: -19
    },
    {
      event: 'Total Views',
      companyIcon: '/assets/images/icon-youtube.svg',
      altCompanyIcon: 'Youtube Logo',
      eventCount: 14407,
      eventCountRate: -12
    }
  ]

  checked = false;

  constructor(
    private themeSelector: ThemeSelectorService
  ) {
  }

  ngOnInit(): void {
    this.totalAudience.update((totalAudience) => {
      return this.audiences.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.numberOfAudience;
      }, 0);
    });
  }

  setIsDarkMode(checked: boolean) {
    this.themeSelector.select(checked ? 'light' : 'dark');
  }
}
