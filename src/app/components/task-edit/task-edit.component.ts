import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskDataService } from 'src/app/services/task-data.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  editTask: Task = new Task();
  id: number;

  constructor(private actRoute: ActivatedRoute, private taskData: TaskDataService, private router: Router) { }

  ngOnInit(): void {
    this.id = parseInt(this.actRoute.snapshot.paramMap.get("id"));
    console.log(this.id);

    this.taskData.getTaskById(this.id).subscribe(response => {
      console.log(response);
      this.editTask = response;
    })
  }

  updateTask() {
    this.taskData.updateTask(this.id, this.editTask).subscribe(response => {
      console.log(response);
      this.router.navigate(["list"]);
    })
  }

}
