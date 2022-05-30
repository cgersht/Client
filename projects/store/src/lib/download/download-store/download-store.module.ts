import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DownloadEffects } from './download/download.effects';
import { downloadReducer } from './download/download.reducer';

@NgModule({

  imports: [
    StoreModule.forFeature('download', downloadReducer),
    EffectsModule.forFeature([
      DownloadEffects
    ])
  ],
  exports: [StoreModule]
})
export class DownloadStoreModule { }
