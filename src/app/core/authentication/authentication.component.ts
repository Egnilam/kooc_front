import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { IUser } from '../../shared/models/user.interface';
import { Router } from '@angular/router';
import { UserLoginModel } from '../../shared/models/user-login.model';
import { AuthenticationError } from '../../shared/errors/authentication.error';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
  authenticationError: AuthenticationError | null = null;

  usernameCtrl = new FormControl('', { validators : [Validators.required, Validators.email], nonNullable : true });
  passwordCtrl =  new FormControl('', { validators : [Validators.required], nonNullable : true });

  userForm= this.fb.group({
    username: this.usernameCtrl,
    password: this.passwordCtrl
  });

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
  }

  login(){
    let userLogin: UserLoginModel = {...this.userForm.getRawValue()};

    this.authenticationService.login(userLogin).subscribe({
      next: (user: IUser) => {
        this.redirectAfterAuthentication(user.id);
      },
      error: error => {
        this.authenticationError = error instanceof AuthenticationError ? error : null;
      }
    })
  }

  private redirectAfterAuthentication(id: string) {
    this.router.navigate([`users/${id}`])
  }
}
