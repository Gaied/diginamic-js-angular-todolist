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
  let newid: number = this.getNewId();
    todo.id = newid;
this.get(todo.id).label= todo.label;
}

getNewId() {
  let n: number = 0;
  this.listodo.forEach(element => {
    if (element.id > n) {
      n = element.id;
    }
  });
  return n + 1;
}

delete(id : number) {
  this.listodo.splice(this.listodo.indexOf(this.get(id)),1);
}
}
