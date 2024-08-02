import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() selectUser = new EventEmitter<string>();

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }
}
