import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [
  //localhost:4200/
  {path: "", redirectTo: "list", pathMatch:"full"},

  //localhost:4200/list
  {path: "list", component: TaskListComponent},

  //localhost:4200/list/1
  {path: "details/:id", component: TaskDetailComponent},

  //localhost:4200/create
  {path: "create", component: TaskCreateComponent},

  //localhost:4200/edit/1
  {path: "edit/:id", component: TaskEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
