import { Injectable } from '@angular/core';
import { Task } from './task';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class TaskService {

  constructor(private http: Http) { }
  private tasksUrl = 'https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks';


  getTasks(): Observable<Task[]> {
    return this.http.get(this.tasksUrl)
      .map((res: Response) => res.json().documents)
      .map((tasks: Array<any>) => {
        let result: Array<Task> = [];
        if (tasks) {
          tasks.forEach((task) => {
            result.push(new Task(task.name, task.fields.title.stringValue, task.fields.description.stringValue,
              task.createTime, task.updateTime));
          });
        }
        return result;
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Update a task stub
  updateTask (body:Task): Observable<Task[]> {
    console.log(`Update task ${body['name']}`)
    return;
  }   
// Delete a task stub
removeTask (name:string): Observable<Task[]> {
  console.log(`Delete task ${name}`)
    return;
  }   
}