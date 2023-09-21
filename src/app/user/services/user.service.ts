import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserPasswordModel } from '../models/user-password.model';
import { UserDeleteModel } from '../models/user-delete.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8081/api/v1/users/'
  constructor(private http: HttpClient) { }

  getOne(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.url}${id}`);
  }

  update(user: UserModel): Observable<UserModel> {
    return this.http.get<UserModel>(this.url);
  }

  updatePassword(userPassword: UserPasswordModel): Observable<any> {
    return this.http.get(this.url);
  }

  delete(userDelete: UserDeleteModel): Observable<any> {
    return this.http.get(this.url);
  }
}
