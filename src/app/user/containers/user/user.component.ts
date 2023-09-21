import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AccountComponent } from '../../components/account/account.component';
import { UserModel } from '../../models/user.model';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, AccountComponent, RouterLink, AsyncPipe],
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit{
  id!: string;
  user$!: Observable<UserModel>;
  constructor(private userService: UserService, route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('userId')!;
  }

  ngOnInit(): void {
    this.user$ =  this.userService.getOne(this.id);
  }
}
