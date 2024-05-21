import { Subject } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe({
    next: value => console.log(`observerA: ${value}`)
});

subject.next(1);
subject.next(2);

subject.subscribe({
    next: value => console.log(`observerB: ${value}`)
});

subject.next(3);