import {NgClass} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {ShortNumberPipe} from '../../pipes/short-number.pipe';


@Component({
  selector: 'app-statistic-event-card',
  standalone: true,
  imports: [
    NgClass,
    ShortNumberPipe
  ],
  templateUrl: './statistic-event-card.component.html',
  styleUrl: './statistic-event-card.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'app-statistic-event-card'
  }
})
export class StatisticEventCardComponent {

  @Input({required: true}) event!: string;
  @Input({required: true}) companyIcon!: string;
  @Input({required: true}) altCompanyIcon!: string;
  @Input({required: true}) eventCount!: number;
  @Input({required: true}) eventCountRate!: number;
}
