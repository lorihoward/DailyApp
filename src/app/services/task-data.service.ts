import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  taskURL: string = "http://localhost:3000/task";

  constructor(private http: HttpClient) { }

  //task list
  getTask = (): Observable<Task[]> => {
    return this.http.get<Task[]>(this.taskURL);
  }

  //task details
  getTaskById = (id: number): Observable<Task> => {
    return this.http.get<Task>(this.taskURL + "/" + id);
  }

  //edit task
  updateTask(id:number, edittedInfo: Task): Observable<Task> {
    return this.http.put<Task>(this.taskURL + "/" + id, edittedInfo)
  }

  //delete task
  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(this.taskURL + "/" + id)
  }

  //create task
  createTask(newTask: Task): Observable<Task> {
    return this.http.post<Task>(this.taskURL, newTask)
  }
}
