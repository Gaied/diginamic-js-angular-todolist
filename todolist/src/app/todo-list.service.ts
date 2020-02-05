import { Injectable } from '@angular/core';
import { Todo, Todos } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  listodo : Todos;

  constructor() {
    this.listodo= new Array();
   }

getAll () {
  return this.listodo;
}

get(id : number) {
let todo: Todo;
this.listodo.filter(x=>{
  if (x.id===id) {
    todo=x;
  } 
});
return todo;
}

add(todo : Todo) {
this.listodo.push(todo);
}

edit(todo : Todo){
this.get(todo.id).label= todo.label;
}

delete(id : number) {
  this.listodo.splice(this.listodo.indexOf(this.get(id)),1);
}
}
