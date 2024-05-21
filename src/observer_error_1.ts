import {concatMap, filter, interval, Observable, of} from "rxjs";

const observabe$ = new Observable(subscriber =>  {
    subscriber.error(new Error('Error from observable'))
})
observabe$.subscribe({
    next: (v) => console.log(v),
    error: (e) => console.error(e),
    complete: () => console.log('completed')
})