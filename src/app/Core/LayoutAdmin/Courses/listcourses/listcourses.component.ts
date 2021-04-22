import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listcourses',
  templateUrl: './listcourses.component.html',
  styleUrls: ['./listcourses.component.scss']
})
export class ListcoursesComponent implements OnInit {
  cols: any[];
  constructor() { }

  ngOnInit() {
    this.cols = [
      {field: 'نام مدرس', header: 'نام مدرس'},
      {field: 'عنوان دوره', header: 'عنوان دوره'},
      {field: 'تاریخ تولید', header: 'تاریخ تولید'},
      {field: 'قیمت', header: 'قیمت'},
      {field: 'عملیات', header: 'عملیات'}
    ];
  }

}
