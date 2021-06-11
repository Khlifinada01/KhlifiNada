import {User} from './User';

export class Room {
  id: string;
  name: string;
  code: number;
  email: string;
  users: User[] = [];
  constructor(id: string, name: string, code: number, email: string) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.email = email;
    this.users = [];
  }


}
