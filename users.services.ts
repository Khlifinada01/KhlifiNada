import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Data} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {User} from '../model/User';

@Injectable({providedIn: 'root'})
export class UsersService {
  userservice!: UsersService;
  users: Observable<User[]> | null = null;

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    const host = environment.host;
    return this.http.get<User[]>(host + '/Users');
  }

  getRoom(id: any): Observable<User[]> {
    const host = environment.host;
    return this.http.get<User[]>(host + '/room');
  }

  // tslint:disable-next-line:typedef
  onGetUsers(data: Data) {
    this.userservice.getAllUsers();
  }

  getUserByEmail(email: string): Observable<User> {
    const host = environment.host;
    return this.http.get<User>(host + '/users?email=' + email);
  }
}

