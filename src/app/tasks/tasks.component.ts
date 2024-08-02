import {
  Component,
  computed,
  input,
  Input,
  OnInit,
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
  // @Input({ required: true }) currentUser!: User;
  currentUser = input.required<User>();
  tasks: Signal<Task[]> = computed(() =>
    DummyTasks.filter((x) => x.userId == this.currentUser().id)
  );
}
