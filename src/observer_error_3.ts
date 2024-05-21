import {catchError, concatMap, EMPTY, of, throwError, timer} from "rxjs";

const observer$ = timer(1000).pipe(
    concatMap(e => throwError(() => new Error('throwError'))),
    catchError(e => EMPTY))

observer$.subscribe({
    next: console.log,
    error: console.error,
    complete: () => console.log('completed')
})