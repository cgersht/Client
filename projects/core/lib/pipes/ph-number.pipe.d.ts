import { PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
export declare class PhNumberPipe extends DecimalPipe implements PipeTransform {
    transform(value: string): string;
}
