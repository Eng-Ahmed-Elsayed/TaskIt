import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DUMMY_USERS } from './shared/data/dummy-users';
import { User } from './shared/models/user.model';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks/tasks.component';
import { TaskService } from './shared/services/task.service';
import { Task } from './shared/models/task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, CommonModule, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  currentUser: User = this.users[0];
  tasks!: Task[];

  onSelectUser(id: string) {
    this.currentUser = this.users.find((x) => x.id == id) ?? this.users[0];
  }
}
