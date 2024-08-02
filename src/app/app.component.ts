import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DUMMY_USERS } from './shared/dummy-users';
import { User } from './shared/user';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';

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

  onSelectUser(id: string) {
    this.currentUser = this.users.find((x) => x.id == id) ?? this.users[0];
  }
}
