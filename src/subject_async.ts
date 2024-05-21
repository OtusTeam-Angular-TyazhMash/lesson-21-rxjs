import { AsyncSubject } from 'rxjs';

const subject = new AsyncSubject<number>();

subject.subscribe({
    next: value => console.log(`observerA: ${value}`)
});

subject.next(1);
subject.next(2);
subject.next(3);

subject.subscribe({
    next: value => console.log(`observerB: ${value}`)
});

subject.next(4);
subject.complete();
