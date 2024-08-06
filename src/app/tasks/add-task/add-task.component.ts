import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../../shared/services/task.service';
import { FormsModule } from '@angular/forms';
import { TaskForm } from '../../shared/models/task-form.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() cancelNewTaskEmitter = new EventEmitter();
  newTaskForm: TaskForm = {
    dueDate: '',
    summary: '',
    title: '',
  };

  constructor(private taskService: TaskService) {}

  createTask() {
    this.taskService.createTask(this.newTaskForm);
    this.onCancel();
  }

  onCancel() {
    this.cancelNewTaskEmitter.emit();
  }
}
