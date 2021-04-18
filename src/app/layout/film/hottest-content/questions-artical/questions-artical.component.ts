import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../../../layout.service';
import {QuestionDetailModel} from './questionDetail.model';


@Component({
  selector: 'app-questions-artical',
  templateUrl: './questions-artical.component.html',
  styleUrls: ['./questions-artical.component.scss']
})
export class QuestionsArticalComponent implements OnInit {
  listquestion:any[];
  cols: any[];
  public QuestionDetail: QuestionDetailModel[] = [];
  constructor( private service: LayoutService) { }

  ngOnInit() {
    this.cols = [
      {field: 'title', header: 'عنوان'},
      {field: 'count', header: 'تعداد سوال'},
      {field: 'typeQuestion', header: 'نوع سوال'},
      {field: 'abstract', header: 'خلاصه'},
      {field: 'author', header: 'نویسنده'},
      {field: 'price', header: 'تاریخ'}
    ];
    this.questionget();
  }
 questionget(){
    this.service.getQuestion().subscribe((result)=>{
      if (result['success'] === true){
        this.listquestion=result['data'];
        // this.QuestionDetail=result['data'];
        // console.log( this.QuestionDetail)
      }
    });
 }
}
