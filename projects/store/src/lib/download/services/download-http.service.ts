import { HttpClient, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { HttpRequestModel } from 'types';

// import { retryWhenExpressionTrue } from './../../helpers/retry-when-expression-true.rxjs';
import { retryWhenExpressionTrue } from './../../helpers/retry-when-expression-true.rxjs';
// import { WindowService } from './../../helpers/window.service';
import { WindowService } from './../../helpers/window.service';
import { ReportStatus } from '../model/ReportStatus';
import { DownloadUploadService } from './download-upload.service';

@Injectable({ providedIn: 'root' })
export class DownloadHttpService {

  constructor(
    private http: HttpClient,
    private windowService: WindowService,
    @Optional() private downloadUpload?: DownloadUploadService
  ) { }

  downloadByLink$(request: HttpRequestModel, viewName: string) {
     
    this.windowService.openNewTab(
      `${request.fullUrl}${request.queryParams}`);
  }


  downloadByGetStream$<T>(request: HttpRequestModel, viewName: string): Observable<HttpEvent<Blob | T>> {
    return this._request$(request, 'GET').pipe(
      tap(this._requestResponseEvents.bind(this))
    );
  }


  private _request$(httpRequest: HttpRequestModel, method: 'GET' | 'POST'): Observable<HttpEvent<any>> {
    return this.http.request(
      method,
      httpRequest.fullUrl,
      {

        body: { ...httpRequest.body },
        params: { ...httpRequest.fullParams },
        observe: 'events',
        responseType: 'blob',
        reportProgress: true,

      });
  }

  downloadStreamWithRetry$(request: HttpRequestModel, method: 'GET' | 'POST'): Observable<any> {
    return this._request$(request, method).pipe(


      map(this._requestResponseEvents.bind(this)),

      filter(val => !!val),

      retryWhenExpressionTrue(status => status === ReportStatus.InProgress, 2000, Infinity),
    );
  }


  private _requestResponseEvents(event: HttpEvent<Blob>): any {
    
    if (event.type === HttpEventType.ResponseHeader) {
      const { headers } = event;
      const contentDisposition = event.headers.get('Content-Disposition');
    

      return null;
    }

    if (event.type === HttpEventType.DownloadProgress) {
      const { } = event;


      return null;
    }
    if (event.type === HttpEventType.Response) {
      const { body } = event;
      // console.log('HttpEventType.Response', { event })
      if (!body) { return null; }
      if (body.type === 'application/json') {
        const reader = new FileReader();
        reader.readAsText(body)
        return JSON.parse(reader.result as string);
      }


      return this.downloadUpload.downloadFromArrayBuffer(event.body, event.headers)

    }
  }

}
