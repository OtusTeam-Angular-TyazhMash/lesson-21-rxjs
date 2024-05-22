import {concatMap, filter, interval, map, Observable, of, throwError} from "rxjs";

const interval$ = interval(1000)
    .pipe(
        filter(v => v % 2 === 0),
        map(v => v + v),

        concatMap(v => {
            if (v !== 0 && v % 3 === 0) {
                return throwError(() => new Error(`Even Number ${v}`))
                //throw new Error(`Even Number ${v}`)
            } else {
                return of(v)
            }
        })

    )
;

interval$.subscribe({
    next: (v) => console.log(v),
    error: (e) => console.error(e),
    complete: () => console.log('completed')
})