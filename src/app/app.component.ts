import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(protected authenticationService: AuthenticationService) {
  }

  logout() {
    this.authenticationService.logout();
  }
}
