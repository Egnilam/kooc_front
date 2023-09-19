import { Injectable } from '@angular/core';
import { UserAuthenticationModel } from '../../shared/models/user-authentication.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../../shared/models/user.interface';
import { UserModel } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<IUser|null>;
  public user$: Observable<IUser|null>;

  public currentUser = {};
  private backUrl = 'http://localhost:8081/api/v1/'
  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<IUser|null>(null);
    this.user$ = this.userSubject.asObservable();
  }

  public get userValue(): IUser|null {
    return this.userSubject.value;
  }

  login(user: UserAuthenticationModel) {
    this.http
      .post<IUser>(`${this.backUrl}login`,user)
      .subscribe(user  => {
        this.userSubject.next(user);
        this.router.navigate([`account/${user.id}`]);
      })
  }

  getToken(): string {
    return 'xxx';
  }
  isLogged(): boolean {
    console.log(this.userSubject.value)
    return !!this.userSubject.value;
  }

  logout() {
    this.userSubject.next(null);
    this.router.navigate(['login']);
  }
}
