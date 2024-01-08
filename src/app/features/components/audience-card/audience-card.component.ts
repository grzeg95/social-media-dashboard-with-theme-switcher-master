import {NgClass} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {Hsl, LinearGradient} from '../../models/colors';
import {ShortNumberPipe} from '../../pipes/short-number.pipe';


@Component({
  selector: 'app-audience-card',
  standalone: true,
  imports: [
    NgClass,
    ShortNumberPipe
  ],
  templateUrl: './audience-card.component.html',
  styleUrl: './audience-card.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'app-audience-card'
  }
})
export class AudienceCardComponent {

  @Input() indicatorTopBorderColor: Hsl | LinearGradient | 'white' = 'white';
  @Input({required: true}) typeOfCompany!: string;
  @Input({required: true}) companyIcon!: string;
  @Input({required: true}) altCompanyIcon!: string;
  @Input({required: true}) nick!: string;
  @Input({required: true}) numberOfAudience!: number;
  @Input({required: true}) numberOfAudienceType!: string;
  @Input({required: true}) numberOfAudienceOnDate!: number;
  @Input({required: true}) audienceDate!: string;
}
