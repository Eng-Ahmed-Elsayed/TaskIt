import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../shared/models/task.model';
import { User } from '../../shared/models/user.model';
import { TaskComponent } from '../task/task.component';
import { TaskService } from '../../shared/services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) currentUser!: User;
  private isNewTask: boolean = false;
  get tasks() {
    return this.taskService.getTasks(this.currentUser?.id);
  }
  get getIsNewTask() {
    return this.isNewTask;
  }
  constructor(private taskService: TaskService) {}

  openTaskFormModal() {
    this.isNewTask = true;
  }
  cancelNewTask() {
    this.isNewTask = false;
  }
}
