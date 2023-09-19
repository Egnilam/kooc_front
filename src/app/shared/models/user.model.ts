import { IUser } from './user.interface';

export class UserModel implements IUser {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  token: string;

  constructor(id: string, username: string, firstName: string, lastName: string, token: string) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.token = token;
  }
}
