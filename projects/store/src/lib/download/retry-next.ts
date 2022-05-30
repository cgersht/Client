import { HttpResponse } from '@angular/common/http';
import { Observable, of, OperatorFunction } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ReportStatus } from './model/ReportStatus';

export const retryNext = (): OperatorFunction<HttpResponse<any>, { retry: boolean, headers: any, body: Blob, reportStatus: ReportStatus }> => source$ => {

  return source$.pipe(
    switchMap(({ body, headers }) => {

      if (body.size > 10) { return of({ retry: false, headers, body, reportStatus: ReportStatus.Ready }) }
      const reader = new FileReader();

      reader.readAsBinaryString(body);

      return new Observable(observe => {
        reader.onload = event => {
          observe.next(event || reader.result)
        }
      }).pipe(
        map(_ => ({ retry: +reader.result === ReportStatus.InProgress, headers, body, reportStatus: +reader.result }))
      )
    }))
}
