import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../shared/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() completedTask = new EventEmitter<string>();

  onCompleteTask() {
    this.completedTask.emit(this.task.id);
  }
}
