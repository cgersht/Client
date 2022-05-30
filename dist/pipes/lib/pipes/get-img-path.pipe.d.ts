import { PipeTransform } from '@angular/core';
import { GetOptionsService } from 'services';
export declare class GetImgPathPipe implements PipeTransform {
    private service;
    constructor(service: GetOptionsService);
    transform(img: string): string;
}
