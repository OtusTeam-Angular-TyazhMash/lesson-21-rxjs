
import { Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const cancel$ = new Subject<void>();

const url = 'https://jsonplaceholder.typicode.com/users';
const request$ = ajax.getJSON(url);

const subscription = request$.subscribe(data => console.log(data));

cancel$.subscribe(() => subscription.unsubscribe());

setTimeout(() => cancel$.next(), 5000);