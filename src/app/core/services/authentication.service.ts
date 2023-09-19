import { Injectable } from '@angular/core';
import { UserLoginModel } from '../../shared/models/user-login.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IUser } from '../../shared/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<IUser|null>;
  public user$: Observable<IUser|null>;
  private backUrl = 'http://localhost:8081/api/v1/'

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<IUser | null>(JSON.parse(localStorage.getItem('user')!));
    this.user$ = this.userSubject.asObservable();
  }

  // Allow components to check the user without subscribing to user$
  public get userValue(): IUser|null {
    return this.userSubject.value;
  }

  login(userLogin: UserLoginModel): Observable<IUser>{
    return this.http
      .post<IUser>(`${this.backUrl}login`, userLogin)
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user))
        this.userSubject.next(user);

        return user;
      }))
  }

  logout() {
    localStorage.removeItem('user')
    this.userSubject.next(null);
    this.router.navigate(['login']);
  }
}
