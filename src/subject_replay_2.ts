import { ReplaySubject } from 'rxjs';

const subject = new ReplaySubject<number>(2, 300);

subject.subscribe({
    next: value => console.log(`observerA: ${value}`)
});

subject.next(1);
subject.next(2);

setTimeout(() => {
    subject.next(3);
}, 400)

setTimeout(() => {
    subject.subscribe({
        next: value => console.log(`observerB: ${value}`)
    });
}, 600)

setTimeout(() => {
    subject.next(4);
}, 500)