import { Routes } from '@angular/router';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { authGuard } from './core/guards/auth.guard';
import { AccountComponent } from './user/components/account/account.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: AuthenticationComponent },
  { path: 'account/:id', component: AccountComponent, canActivate: [authGuard] },
]
