import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { DummyTasks } from '../data/dummy-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = DummyTasks;

  constructor() {}

  getTasks = (userId: string) => this.tasks.filter((x) => x.userId == userId);

  createTask(task: Task) {
    this.tasks.unshift(task);
  }
  completedTask(taskId: string) {
    this.tasks = this.tasks.filter((x) => x.id != taskId);
  }
}
