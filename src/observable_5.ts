import { interval } from 'rxjs';

const counter$ = interval(1000);

counter$.subscribe(count => console.log(count));
