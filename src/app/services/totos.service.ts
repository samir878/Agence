import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/toto';

@Injectable({
  providedIn: 'root'
})
export class TotosService {

  constructor() { }

  getTodos = async() : Promise<Todo[]>=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/posts');
    return (await response.json()) ?? [];
  }

}
