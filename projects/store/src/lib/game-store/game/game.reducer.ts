import { Action, createReducer, on } from '@ngrx/store';
import { gameActions } from './game.actions';
import { GameState } from './game.state';

const reducer = createReducer(
    new GameState(),
    on(gameActions.LoadPlayersSuccessAction, (state, { players }) => ({ ...state, players })),

  )

  export function gameReducer(state: GameState | undefined, action: Action) {
    return reducer(state, action);
  }
