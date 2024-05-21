import { ReplaySubject } from 'rxjs';

const subject = new ReplaySubject<number>(2, 500);

subject.subscribe({
    next: value => console.log(`observerA: ${value}`)
});

subject.next(1);
subject.next(2);
subject.next(3);

setTimeout(() => {
    subject.subscribe({
        next: value => console.log(`observerB: ${value}`)
    });
}, 600)

setTimeout(() => {
    subject.next(4);
}, 550)