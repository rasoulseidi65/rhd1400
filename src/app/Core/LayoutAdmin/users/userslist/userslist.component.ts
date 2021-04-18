import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UserService} from '../user.service';
import {User} from '../user.model';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {
  userform: FormGroup;
  public userModels: User[] = [];
  cols: any[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.index().subscribe(res => {
      this.userModels = res['data'];

    });
  }

}
