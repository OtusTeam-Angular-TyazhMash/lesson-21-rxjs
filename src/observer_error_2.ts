import {catchError, concatMap, EMPTY, of, throwError, timer} from "rxjs";

const observer$ = timer(1000)
    .pipe(
        concatMap(e => throwError(() => new Error('throwError'))),
        catchError(e => EMPTY))
        //catchError(e => of('Something happened but we want to do logic')))


observer$.subscribe({
    next: console.log,
    error: console.error,
    complete: () => console.log('completed')
})