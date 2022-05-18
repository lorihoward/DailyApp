import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskEditComponent,
    TaskCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
