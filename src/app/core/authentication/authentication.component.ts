import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { UserAuthenticationModel } from '../../shared/models/user-authentication.model';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
  userAuthentication: UserAuthenticationModel = {
    username: '',
    password: ''
  };
  constructor(private auth: AuthenticationService) {
  }

  login(userAuthentication: UserAuthenticationModel){
    this.auth.login(userAuthentication)
  }
}
