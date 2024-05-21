import {concatMap, filter, interval, Observable, of, throwError} from "rxjs";

const observabe$ = interval(1000)
    .pipe(
        filter(v => v % 2 === 0),
        /*
        concatMap(v => {
            if (v % 2 === 0) {
                //return throwError(() => new Error(`Even Number ${v}`))
                throw new Error(`Even Number ${v}`)
            } else {
                return of(v)
            }
        })
         */
    )
;

observabe$.subscribe({
    next: (v) => console.log(v),
    error: (e) => console.error(e),
    complete: () => console.log('completed')
})