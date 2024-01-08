import {Hsl, LinearGradient} from './colors';

export type AudienceCard = {
  indicatorTopBorderColor: Hsl | LinearGradient
  typeOfCompany: string,
  companyIcon: string,
  altCompanyIcon: string,
  nick: string,
  numberOfAudience: number
  numberOfAudienceType: string
  numberOfAudienceOnDate: number
  audienceDate: string,
}
