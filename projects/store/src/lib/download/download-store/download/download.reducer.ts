import { Action, createReducer, on } from '@ngrx/store';
import { DownloadActions } from './download.actions';
import { DownloadState } from './download.state';


const reducer = createReducer(
  new DownloadState(),
  on(DownloadActions.DownloadStreamWithRetryAction, ({ inProgress, ...state }, { downloadKey }) => ({ ...state, inProgress: { ...inProgress, [downloadKey]: true } })),
  on(DownloadActions.DownloadStreamWithRetrySuccessAction, ({ inProgress, ...state }, { downloadKey }) => ({ ...state, inProgress: { ...inProgress, [downloadKey]: false } })),
  on(DownloadActions.DownloadStreamWithRetryFailureAction, ({ inProgress, ...state }, { downloadKey }) => ({ ...state, inProgress: { ...inProgress, [downloadKey]: false } })),
);

export function downloadReducer(state: DownloadState, action: Action) {
  return reducer(state, action);
}
