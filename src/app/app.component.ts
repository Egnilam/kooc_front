import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthenticationService } from './core/services/authentication.service';
import { IUser } from './shared/models/user.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  user?: IUser | null;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user$.subscribe(user => this.user = user);
  }

  logout() {
    this.authenticationService.logout()
  }
}
