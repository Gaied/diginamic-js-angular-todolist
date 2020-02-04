import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';


const routes: Routes = [
  { path: 'list', component: TodoListComponentComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  {path : 'add', component : TodoEditComponent},
  {path : 'edit/:id', component : TodoEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
