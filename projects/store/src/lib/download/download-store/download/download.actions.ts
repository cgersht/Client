import { createAction, props } from '@ngrx/store';
import { HttpRequestModel } from 'types';


export const DownloadActions = {


  DownloadByLinkAction: createAction('[Download] Download By Link', props<{ request: HttpRequestModel }>()),

  DownloadStreamWithRetryAction: createAction('[Download] Download By Retry', props<{ request: HttpRequestModel, downloadKey: string, method: 'GET' | 'POST' }>()),
  DownloadStreamWithRetrySuccessAction: createAction('[Download] Download By Retry Success', props<{ downloadKey: string }>()),
  DownloadStreamWithRetryFailureAction: createAction('[Download] Download By Retry Failure', props<{ downloadKey: string, error: any }>()),

  DownloadByGetStreamAction: createAction('[Download] Download By Get Stream', props<{ request: HttpRequestModel }>()),

};
