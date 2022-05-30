import { PipeTransform } from '@angular/core';
import { timeFormats } from 'types';
export declare class TimeSpanPipe implements PipeTransform {
    transform(value: any, format?: timeFormats): any;
}
