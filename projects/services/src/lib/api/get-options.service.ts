
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, tap } from 'rxjs/operators';

@Injectable({  providedIn: 'root'})
export class GetOptionsService {
 options:  any[] ;
  constructor(private http: HttpClient) {  }
//
  initService(path: string,imagesPath: string): Promise<any> {
    console.log(`============${path}`);
    return this.http.get<any[] >(path).pipe(
      map(result => result.map(item => ({ ...item, imgSource: `${imagesPath}/${ item['img']}.png`}))),
      tap(result => this.options = result),
      tap(result => console.log(`**************${result}`)),
     ).toPromise();
  }
  getOptions() {
  //  console.log(`-----------------${this.options}`);
      return this.options;
  }

  getOptionByImage(img) {
    if (!this.options) {  return ''; }
    return (this.options.find(item => item.img === img) || {imgSource: 'notFound'}).imgSource;
  }


}
