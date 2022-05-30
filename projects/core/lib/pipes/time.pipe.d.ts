import { PipeTransform } from '@angular/core';
import { dateTimeFormats, dateFormats, timeFormats } from 'types';
import { DatePipe } from '@angular/common';
export declare class MyTimePipe extends DatePipe implements PipeTransform {
    regexFormat: RegExp[];
    dateIsValidByMoment(value: any): boolean;
    dateByMoment(value: any, format: any): string;
    transform(value: any, format: dateFormats | dateTimeFormats | timeFormats): any;
}
