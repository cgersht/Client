import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of  } from 'rxjs';
import { catchError,  map, mergeMap,  switchMap  } from 'rxjs/operators';
import { DownloadHttpService } from '../../services/download-http.service';
import { DownloadUploadService } from '../../services/download-upload.service';
import { DownloadActions } from './download.actions';

@Injectable()
export class DownloadEffects {


  downloadByLink$ = createEffect(() => this.actions$.pipe(
    ofType(DownloadActions.DownloadByLinkAction),
    map(({ request, type }) => this.downloadHttp.downloadByLink$(request, type))
  ), { dispatch: false })

  downloadByGetStream$ = createEffect(() => this.actions$.pipe(
    ofType(DownloadActions.DownloadByGetStreamAction),
    switchMap(({ request, type }) => this.downloadHttp.downloadByGetStream$(request, type))
  ), { dispatch: false })

  downloadByRetry$ = createEffect(() => this.actions$.pipe(
    ofType(DownloadActions.DownloadStreamWithRetryAction),
    mergeMap(({ request, downloadKey, method, type }) => this.downloadHttp.downloadStreamWithRetry$(request, method).pipe(
      map(_ => DownloadActions.DownloadStreamWithRetrySuccessAction({ downloadKey })),
      catchError(error => of(DownloadActions.DownloadStreamWithRetryFailureAction({ error, downloadKey })))
    )),
  ));

  constructor(
    private actions$: Actions,
    private downloadHttp: DownloadHttpService,
    private downloadUploadService: DownloadUploadService,
    private store: Store<any>) {
  }

}
