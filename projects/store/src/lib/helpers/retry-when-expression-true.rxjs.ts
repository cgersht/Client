import { of, OperatorFunction } from 'rxjs';
import { delay, retryWhen, switchMap, takeWhile, tap } from 'rxjs/operators';

export function retryWhenExpressionTrue<T>(predicateValue: (value: T) => boolean, delayTime: number, maxRetries: number): OperatorFunction<T, T> {

  // tslint:disable-next-line:only-arrow-functions
  return function (source$) {

    return source$.pipe(
      takeWhile(data => !!maxRetries),
      tap(data => {
        if (predicateValue(data)) {
          maxRetries = maxRetries - 1;
          throw new Error(`Examine of the value ${data} by the predicateValue ${predicateValue} was true`);
        }
      }),
      retryWhen(errors => errors.pipe(
        delay(delayTime),
        switchMap(err => of(err),
        ))
      )
    );
  }
}
