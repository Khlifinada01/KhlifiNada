import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Room} from '../model/Room';
import {User} from '../model/User';

@Injectable({providedIn: 'root'})
export class RoomService {
  data: any;

  constructor(private http: HttpClient) {
  }

  createRoom(room: Room): Observable<Room> {
    let host: string;
    host = environment.host;
    return this.http.post<Room>(host + '/room', room);
  }

  getAllRoom(): Observable<Room[]> {
    const host = environment.host;
    return this.http.get<Room[]>(host + '/room');
  }

  getRoom(id: any): Observable<User[]> {
    const host = environment.host;
    return this.http.get<User[]>(host + '/room');
  }

  joinRoom(value: any): Observable<any> {
    const host = environment.host;
    return this.http.post<User[]>(host + '/room',value);
  }
}

