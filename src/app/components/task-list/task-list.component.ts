import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskDataService } from '../../services/task-data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskList: Task[] = [];
  id: number;


  constructor(private taskData: TaskDataService) {
    this.taskData.getTask().subscribe(task => (this.taskList = task));
  }

  ngOnInit(): void {
    this.taskData.getTask().subscribe(response => {
      console.log(response);
      this.taskList = response;
    })
  }

  deleteTask(id: number) {
    console.log("Deleting" + id);
    this.taskData.deleteTask(id).subscribe(response => {
      console.log(response);
      this.ngOnInit();
    });
  
  }
 
}
