import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskDataService } from 'src/app/services/task-data.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  newTask: Task = new Task();

  constructor(private taskData: TaskDataService, private router: Router) { }

  ngOnInit(): void {
  }

  createNew(){
    this.taskData.createTask(this.newTask).subscribe(response => {
      console.log(response);
      this.router.navigate(["list"]);
    })
  }

}
