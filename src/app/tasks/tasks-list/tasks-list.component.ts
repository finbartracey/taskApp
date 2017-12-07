import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { Task } from '../shared/task';

@Component({
  selector: 'task-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  constructor(private taskService: TaskService) { }
  
    tasks: Task[]

    editRowName: any;
    toggle(name){
      this.editRowName = name;
    }


    getList(): void {
      
      this.taskService.getTasks().subscribe(
        tasks => this.tasks = tasks, 
        err => {
            console.log(err);
        });
    }

    deleteTask(taskName : string){
      this.taskService.removeTask(taskName)
    }

    editTask(task : Task){
      this.taskService.updateTask(task)
    }

    ngOnInit() {
      this.getList();
    }

}
