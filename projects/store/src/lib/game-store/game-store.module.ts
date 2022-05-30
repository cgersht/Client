import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GameEffects } from './game/game.effects';
import { gameReducer } from './game/game.reducer';

@NgModule({
    imports: [
      StoreModule.forFeature( 'game' , gameReducer),
      EffectsModule.forFeature([GameEffects])
    ],
    exports: [StoreModule]
  })
  export class GameStoreModule  {
  }

