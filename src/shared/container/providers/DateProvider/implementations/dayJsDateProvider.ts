import { IDateProvider } from '../IDateProvider';

import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';

dayjs.extend(utc)

export class DayJsDateProvider implements IDateProvider {
  compareInHours(start_date: Date, end_date: Date): number {
    const start_date_utc= this.convertToUTC(start_date)
    const end_date_utc= this.convertToUTC(end_date)
    return dayjs(end_date_utc).diff(start_date_utc, 'hours')
  }
  dateNow(): Date {
    return dayjs().toDate()
  }
  convertToUTC(date: Date): string {
    return dayjs(date).utc().local().format()  
  }
}