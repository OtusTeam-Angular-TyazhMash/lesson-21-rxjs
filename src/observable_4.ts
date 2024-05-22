import { timer} from 'rxjs';

const timer$ = timer(2000);

timer$.subscribe(() => console.log('2 seconds have passed!'));