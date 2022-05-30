import { createFeatureSelector, createSelector, MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { IDictObject } from 'types';
import { DownloadState } from './download.state';

const downloadFeatureSelector: MemoizedSelector<object, DownloadState> = createFeatureSelector('download');

const inProgressSelector: MemoizedSelector<object, IDictObject<boolean>> = createSelector(downloadFeatureSelector, ({ inProgress }) => inProgress);

export const loadingDownloadSelector: MemoizedSelectorWithProps<object, string, boolean> = createSelector(
  inProgressSelector,
  (inProgress, downloadKey) => inProgress[downloadKey]
);

