import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Room} from 'src/app/model/Room';
import {User} from 'src/app/model/User';
import {RoomService} from 'src/app/services/room.services';
import {UsersService} from 'src/app/services/users.services';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users$?: Observable<User[]>;
  Room!: RoomService;
  roomService!: RoomService;
  Room$!: Observable<Room[]>;

  constructor(private userservice: UsersService, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.users$ = this.userservice.getAllUsers();
    this.Room$ = this.roomService.getAllRoom();
  }


  onGetRoomById(id: string) {
    this.userservice.getRoom(id).subscribe(() => {
      //this.users = data;
    });
  }

  getAllRoom(): Observable<Room[]> {
    let host = environment.host;
    return this.http.get<Room[]>(host + '/room');
  }
}
