import {
  Component,
  computed,
  input,
  Input,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
import { Task } from '../shared/task';
import { DummyTasks } from '../shared/dummy-tasks';
import { User } from '../shared/user';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) currentUser!: User;
  private tasks: Task[] = DummyTasks;
  get currentUserTask() {
    return this.tasks.filter((x) => x.userId == this.currentUser.id);
  }
  completedTask(taskId: string) {
    this.tasks = this.tasks.filter((x) => x.id != taskId);
  }
}
