import { PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { dateFormats, timeFormats, dateTimeFormats } from 'types';
export declare class MyDatePipe extends DatePipe implements PipeTransform {
    regexFormats: RegExp[];
    dateIsValidByMoment(value: any): boolean;
    dateByMoment(value: any, format: any): string;
    transform(value: any, format: dateFormats | dateTimeFormats | timeFormats): any;
}
