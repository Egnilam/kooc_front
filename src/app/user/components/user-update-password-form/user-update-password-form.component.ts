import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UserPasswordModel } from '../../models/user-password.model';

@Component({
  selector: 'app-user-update-password-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-update-password-form.component.html',
  styles: [
  ]
})
export class UserUpdatePasswordFormComponent {
  passwordCtrl = this.fb.control('');
  passwordConfirmationCtl = this.fb.control('');

  userUpdatePasswordForm = this.fb.group({
    password: this.passwordCtrl,
    passwordConfirmation: this.passwordConfirmationCtl
  });
  constructor(private fb: FormBuilder) {

  }

  submit() {
    console.log(this.userUpdatePasswordForm.value!)
  }
}
