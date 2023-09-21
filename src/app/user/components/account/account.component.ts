import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
})
export class AccountComponent {
  @Input()
  user!: UserModel;
}
