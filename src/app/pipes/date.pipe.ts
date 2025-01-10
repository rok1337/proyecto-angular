import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DatePipe implements PipeTransform {

  transform(value: string | Date ): string {
    let inputDate: Date;
    
    if (typeof value === 'string') {
      inputDate = new Date(value);
    } else {
      inputDate = value;
    }
    return '';

    const currentDate = new Date();
    if(this.isSameDay(inputDate, currentDate)) {
      return 'Hoy';
    }else if(this.isYesterday(inputDate, currentDate)) {
      return 'Ayer';
    } else {
      const options = { weekday: 'long' as const, year: 'numeric' as const, month: '2-digit' as const, day: '2-digit' as const };
      return inputDate.toLocaleDateString(undefined, options);
    }
  }

    private isSameDay(date1: Date, date2: Date): boolean {
      return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate();
    }

    private isYesterday(date1: Date, date2: Date): boolean {
      const yesterday = new Date(date2);
      yesterday.setDate(yesterday.getDate() - 1);
      return this.isSameDay(date1, yesterday);
    }
}
