//@ts-ignore
global.XMLHttpRequest = require('xhr2');

import { ajax } from 'rxjs/ajax';

const url = 'https://jsonplaceholder.typicode.com/users';
const users$ = ajax.getJSON(url);

users$.subscribe(users => console.log(users));