import { Observable } from 'rxjs';

const numbers$ = new Observable(subscriber => {
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next(3)
    subscriber.next(4)
    subscriber.complete();
});

numbers$.subscribe(number => console.log(number));
numbers$.subscribe(
    {
        next: number => console.log(number),
        complete: () => console.log('completed')
    });