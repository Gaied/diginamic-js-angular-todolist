import { Component, OnInit } from '@angular/core';
import {TodoListService} from '../todo-list.service';
import { Todo, Todos } from '../todo.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'td-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  constructor(private servicetolist: TodoListService, private r: Router, private ar: ActivatedRoute) { }

  ngOnInit() {
  }

}
