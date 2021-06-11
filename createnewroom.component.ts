// @ts-ignore

import {Component, TemplateRef} from '@angular/core';
import {RoomService} from 'src/app/services/room.services';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

// tslint:disable-next-line:no-empty-interface

@Component({
  selector: 'app-createnewroom',
  templateUrl: './createnewroom.component.html',
  styleUrls: ['./createnewroom.component.css']
})
export class CreatenewroomComponent {
  form = new FormGroup({
    email: new FormControl(''),
    code: new FormControl(''),
    name: new FormControl(''),
  });

  constructor(private serviceRoom: RoomService, private router: Router) {
  }

  OnCreateRoom(): void {
    console.log(this.form.value);
    this.serviceRoom.createRoom(this.form.value)
      .subscribe(value => {
        this.router.navigateByUrl('/');
      });
  }
}


