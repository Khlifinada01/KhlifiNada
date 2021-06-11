import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RoomService} from '../../services/room.services';
import {Router} from '@angular/router';
import {Room} from '../../model/Room';
import {UsersService} from '../../services/users.services';
import {User} from '../../model/User';


@Component({
  selector: 'app-jointheroom',
  templateUrl: './jointheroom.component.html',
  styleUrls: ['./jointheroom.component.css']
})
export class JointheroomComponent implements OnInit {
  rooms$?: Room[];

  form = new FormGroup({
    email: new FormControl(''),
    code: new FormControl(''),
    secretCode: new FormControl(''),
  });
  private user!: User;
  private room?: Room;

  constructor(private roomService: RoomService, private userService: UsersService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.roomService.getAllRoom().subscribe(value => this.rooms$ = value);
  }

  onJoinRoom(): void {
    this.onGetUser(this.form.value.email);
    if (this.user) {
      //this.room = this.rooms$?.filter(room => room.code = this.form.value.code);
      this.room?.users.push(this.user);
      this.roomService.joinRoom(this.room)
        .subscribe(value => {
          this.router.navigateByUrl('/room');
        });
    }
  }

  onGetUser(email: string): void {
    this.userService.getUserByEmail(email)
      .subscribe((data) => this.user = data);
  }

}

