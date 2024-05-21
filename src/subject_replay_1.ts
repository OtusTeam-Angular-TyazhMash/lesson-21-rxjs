import { ReplaySubject } from 'rxjs';

const subject = new ReplaySubject<number>(2);

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