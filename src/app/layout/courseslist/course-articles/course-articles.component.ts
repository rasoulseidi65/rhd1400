import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../../layout.service';
import {response} from 'express';

@Component({
  selector: 'app-course-articles',
  templateUrl: './course-articles.component.html',
  styleUrls: ['./course-articles.component.scss']
})
export class CourseArticlesComponent implements OnInit {
listArticle: any[];
  constructor(private service: LayoutService) { }

  ngOnInit() {
    this.getListArticle();
  }
getListArticle(){
    this.service.listArticle().subscribe((response) =>{
      if (response['success']===true){
        this.listArticle=response['data'];
      }
    });
}
}
