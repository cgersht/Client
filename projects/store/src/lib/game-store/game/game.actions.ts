import { createAction, props } from '@ngrx/store';
import { Player } from 'types';

export const gameActions = {
    LoadPlayersAction: createAction('[games] Load Players' ),
    LoadPlayersSuccessAction: createAction('[games] Load Players success', props<{  players: Player[] }>()),
    LoadPlayersFailureAction: createAction('[games] Load Players failure', props<{ error: any }>()),

     SetWinAction: createAction('[games] SetWin' , props<{  name:string }>()),
}
