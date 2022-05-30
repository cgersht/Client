import { PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { dateTimeFormats } from 'types';
export declare class MyDateTimePipe extends DatePipe implements PipeTransform {
    regexFormat: RegExp[];
    dateIsValidByMoment(value: any): boolean;
    dateByMoment(value: any, format: any): string;
    transform(value: any, format: dateTimeFormats): any;
}
