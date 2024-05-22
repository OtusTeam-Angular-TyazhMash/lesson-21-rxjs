import { Observable } from 'rxjs';

const numbers$ = new Observable(subscriber => {
    let item = 1
    setInterval(() => {
        subscriber.next(item++)
        console.log(`next ${item}`)
    }, 1000)

});

const subscription = numbers$.subscribe(number => console.log(number));

setTimeout(() => subscription.unsubscribe(), 3000)