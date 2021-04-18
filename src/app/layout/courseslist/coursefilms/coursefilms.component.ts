import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../../layout.service';
import {request} from 'express';

@Component({
  selector: 'app-coursefilms',
  templateUrl: './coursefilms.component.html',
  styleUrls: ['./coursefilms.component.scss']
})
export class CoursefilmsComponent implements OnInit {
 listCourse: any[];
  constructor(private service: LayoutService) { }

  ngOnInit() {
    this.GetListFilm();
  }
 GetListFilm(){
    this.service.listCourse().subscribe((respanse) =>{
      if (respanse['success']===true)
        this.listCourse=respanse['data'];
    });
 }
}
