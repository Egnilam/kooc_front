import { Routes } from '@angular/router';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { authGuard } from './core/guards/auth.guard';
import { unauthGuard } from './core/guards/unauth.guard';

export const routes: Routes = [
  { path: 'login', component: AuthenticationComponent, canActivate: [unauthGuard] },
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: 'users', loadChildren: () => import('./user/user.routes') }
    ]
  },
];
