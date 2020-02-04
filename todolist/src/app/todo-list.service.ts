import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import {Todos} from './listodo';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  listodo : Todo[];

  constructor(private r: ActivatedRoute, private router: Router) { }

getAll () : Todo[] {
  return Todos;
}
get(id : number) {

}
getNewId() {

}
add(todo : Todo) {

}
edit(todo : Todo){

}
delete(id) {
  this.listodo = this.listodo.filter(obj => obj !== id)
}
}
