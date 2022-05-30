import { Pipe, PipeTransform } from '@angular/core';
import { GetOptionsService } from 'services'; 


@Pipe({  name: 'getImgPath'})
export class GetImgPathPipe implements PipeTransform {
  constructor(private service: GetOptionsService) { }
  transform(img: string): string  {
    return this.service.getOptionByImage(img);
  }

}
