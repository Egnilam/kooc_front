import { Routes } from '@angular/router';
import { UserComponent } from './containers/user/user.component';
import {
  UserUpdatePasswordFormComponent
} from './components/user-update-password-form/user-update-password-form.component';
import { UserUpdateFormComponent } from './components/user-update-form/user-update-form.component';
import { UserDeleteFormComponent } from './components/user-delete-form/user-delete-form.component';

const userRoutes: Routes = [
  { path: ':userId/update_password', component: UserUpdatePasswordFormComponent },
  { path: ':userId/update', component: UserUpdateFormComponent },
  { path: ':userId/delete', component: UserDeleteFormComponent },
  { path: ':userId', component: UserComponent },
];

export default userRoutes;
