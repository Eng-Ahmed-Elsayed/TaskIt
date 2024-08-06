import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../shared/models/task.model';
import { User } from '../../shared/models/user.model';
import { TaskComponent } from '../task/task.component';
import { TaskService } from '../../shared/services/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) currentUser!: User;
  get tasks() {
    return this.taskService.getTasks(this.currentUser?.id);
  }

  constructor(private taskService: TaskService) {}
}
