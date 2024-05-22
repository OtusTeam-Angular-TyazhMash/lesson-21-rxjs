import {Subject} from "rxjs";

const subject = new Subject<void>()

subject.subscribe({next: () => console.log('Subject has emit')})

setTimeout(() => subject.next(), 1000)

