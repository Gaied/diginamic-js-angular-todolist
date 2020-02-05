import { Component, OnInit } from '@angular/core';
import {TodoListService} from '../todo-list.service';
import { Todo, Todos } from '../todo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'td-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  styleUrls: ['./todo-list-component.component.css']
})
export class TodoListComponentComponent implements OnInit {


  listodo : Todos;

  constructor(private servicetolist: TodoListService, private r: Router) { }

  ngOnInit() {
    this.listodo= this.servicetolist.getAll();
  }

  deleteTodo(id: number){
   this.servicetolist.delete(id);
  }

  editTodo(id: number){
    this.r.navigate(['/edit/' + id]);
  }

}
