import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { DummyTasks } from '../data/dummy-tasks';
import { TaskForm } from '../models/task-form.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = DummyTasks;
  private currentUserId!: string;

  constructor() {}

  getTasks = (userId: string) => {
    this.currentUserId = userId;
    return this.tasks.filter((x) => x.userId == userId);
  };

  createTask(taskform: TaskForm) {
    let task: Task = {
      id: Date.now().toString(),
      userId: this.currentUserId,
      dueDate: taskform.dueDate,
      summary: taskform.summary,
      title: taskform.title,
    };
    this.tasks.unshift(task);
  }
  completedTask(taskId: string) {
    this.tasks = this.tasks.filter((x) => x.id != taskId);
  }
}
