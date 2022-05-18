import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../models/task';
import { TaskDataService } from '../../services/task-data.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  myTask: Task = new Task();
  id: number;

  constructor(private taskData: TaskDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.taskData.getTaskById(this.id).subscribe(task => (this.myTask = task));
    });
  }

  deleteTask(id: number) {
    console.log("Deleting" + id);
    this.taskData.deleteTask(id).subscribe(response => {
      console.log(response);
      this.router.navigate(["list"]);
    })
  }

}
