// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// import { tap } from 'rxjs/operators';
// import { environment } from 'src/environments/environment';
// @Injectable({ providedIn: 'root' })
// export class GetOptionsService {
//   options: any;
//   constructor(private http: HttpClient) {

//   }
//   initService(): Promise<any> {
//     console.log(environment.options);
//     return this.http.get<any>(environment.options).pipe(
//      tap(result => this.options = result),
//      tap(result => console.log(result)
//      ),
//     ).toPromise();
//   }
//   getOptions() {
//     return this.options[0].option;
//   }
// }
