import { Component, OnInit } from '@angular/core';
import {response} from 'express';
import {LayoutuserService} from '../layoutuser.service';
import {LocalStorageService} from '../../../auth/localStorageLogin/local-storage.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  listCourse: any[];

  constructor(private Service: LayoutuserService,
              private localstorage: LocalStorageService) {
  }

  ngOnInit() {
    this.getcours();
    // alert(this.localstorage.userJson['_id'])
  }

  getcours() {
    let data = {
      userID: this.localstorage.userJson['_id']
    }
    this.Service.CourseUser(data).subscribe((response) => {
      console.log(response)
      if (response['success'] === true) {
        this.listCourse = response['data'];
      }
    });
  }
}
