import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskListComponent } from './components/task-list/task-list.component';

import { HomeComponent } from '../app/home/home.component';
import { AuthGuard } from '../app/_helpers/auth.guard';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
  //localhost:4200/
  { path: '', component: TaskListComponent, canActivate: [AuthGuard] },

  //localhost:4200/users
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },

  //localhost:4200/account
  { path: 'account', loadChildren: accountModule },

  //localhost:4200/list
  {path: "list", component: TaskListComponent, canActivate: [AuthGuard]},

  //localhost:4200/list/1
  {path: "details/:id", component: TaskDetailComponent, canActivate: [AuthGuard]},

  //localhost:4200/create
  {path: "create", component: TaskCreateComponent, canActivate: [AuthGuard]},

  //localhost:4200/edit/1
  {path: "edit/:id", component: TaskEditComponent, canActivate: [AuthGuard]},

  //otherwise redirect to home
  {path: "**", redirectTo: '', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
