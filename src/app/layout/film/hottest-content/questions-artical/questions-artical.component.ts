import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../../../layout.service';
import {QuestionDetailModel} from './questionDetail.model';
import {CartService} from '../../../../serviceCart/cart.service';
import {MessageService} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';


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
  private serviceCart: CartService,
               private route: ActivatedRoute) { }
  displayBasic:boolean;
  majorID:string;
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
   this.route.paramMap.subscribe(params =>
     this.majorID = params.get('id'));
   let data = {
     majorID: this.majorID
   };
    this.service.findByMajorID(data).subscribe((result)=>{
      if (result['success'] === true){
        this.listquestion=result['data'];
        // this.QuestionDetail=result['data'];
         console.log(result)
      }
    });
 }
  addCart(question: any) {
      this.serviceCart.addToCart(question);
    this.displayBasic = true;
  }
}
