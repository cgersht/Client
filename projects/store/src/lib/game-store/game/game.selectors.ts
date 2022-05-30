import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { Player } from 'types';
import { GameState } from './game.state';

const gameFeatureSelector: MemoizedSelector<object, GameState> = createFeatureSelector<GameState>('game');
export const playersSelector$: MemoizedSelector<object, Player[]> =
             createSelector(
                gameFeatureSelector,
                  ({players}) => players );

