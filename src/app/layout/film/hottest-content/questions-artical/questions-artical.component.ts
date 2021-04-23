import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../../../layout.service';
import {QuestionDetailModel} from './questionDetail.model';
import {CartService} from '../../../../serviceCart/cart.service';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-questions-artical',
  templateUrl: './questions-artical.component.html',
  styleUrls: ['./questions-artical.component.scss'],
  providers: [MessageService]
})
export class QuestionsArticalComponent implements OnInit {
  listquestion:any[];
  cols: any[];
  public QuestionDetail: QuestionDetailModel[] = [];
  constructor( private service: LayoutService,
  private serviceCart: CartService) { }
  displayBasic:boolean;
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
  addCart(question: any) {
      this.serviceCart.addToCart(question);
    this.displayBasic = true;
  }
}
