import { Component, OnInit } from '@angular/core';
import {TodoListService} from '../todo-list.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'td-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  styleUrls: ['./todo-list-component.component.css']
})
export class TodoListComponentComponent implements OnInit {


  listodo : Todo[];

  constructor(private servicetolist: TodoListService) { }

  ngOnInit() {
    this.getAlltodolist();
  }

  getAlltodolist(): void {
    this.listodo = this.servicetolist.getAll();
  }



}
