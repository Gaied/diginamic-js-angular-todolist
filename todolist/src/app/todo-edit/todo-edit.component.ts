import { Component, OnInit } from '@angular/core';
import {TodoListService} from '../todo-list.service';
import { Todo} from '../todo.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'td-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  todo: Todo;

  constructor(private servicetolist: TodoListService, private r: Router, private ar: ActivatedRoute) { }

  ngOnInit() {

    let id: string = this.ar.snapshot.paramMap.get('id');
    if (id === null) {

      this.todo = new Todo(0, '');

    } else {

      this.todo = this.servicetolist.get(parseInt(id));
    }
  }

  addTodo() {

    if (this.todo.id === 0) {

      this.todo.id = this.servicetolist.getNewId();
      this.servicetolist.add(this.todo);

    } else {
      this.servicetolist.edit(this.todo);
    }

    this.r.navigate(['/list']);
  }

}
