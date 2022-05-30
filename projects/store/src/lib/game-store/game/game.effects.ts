import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GameHttpService } from 'api';
import { of } from 'rxjs';
import { filter, tap, exhaustMap, map, catchError } from 'rxjs/operators';
import { gameActions } from './game.actions';

@Injectable()
export class GameEffects {

  loadPlayers$ = createEffect(() => this.actions$.pipe(
    ofType(gameActions.LoadPlayersAction     ),
    exhaustMap( _ => this.gameService.getPlayers$().pipe(
      map(players => gameActions.LoadPlayersSuccessAction ( {players})),
      catchError(error => of(gameActions.LoadPlayersFailureAction({ error })))
    ))
  ));

  setWin$ = createEffect(() => this.actions$.pipe(
    ofType(gameActions.SetWinAction),
    exhaustMap(( {name} )=> this.gameService.setWin$(name).pipe(
      map(_ => gameActions.LoadPlayersAction (  ))
    ))
  ));


  constructor(
    private actions$: Actions,
    private gameService: GameHttpService,
  ) { }
}