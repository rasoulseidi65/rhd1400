import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LayoutService} from '../../layout.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import * as moment from 'jalali-moment';
import {response} from 'express';
@Component({
  selector: 'app-content-comments',
  templateUrl: './content-comments.component.html',
  styleUrls: ['./content-comments.component.css']
})
export class ContentCommentsComponent implements OnInit {
@Input() data: any;
  commentForm: FormGroup;
  listComment:any[];
  constructor(private route: ActivatedRoute,
               private service: LayoutService,
               private tf: FormBuilder) { }
id: any;
  ngOnInit(): void {
    setTimeout(()=>{
      this.listComment=this.data['Comment'];
      console.log(this.listComment)
    },3000)
   // console.log(this.data)
    this.route.paramMap.subscribe(params => this.id = params.get('id'));
    this.listCommentForm();
  }
  listCommentForm(){
  this.commentForm = this.tf.group({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
    date: new FormControl(''),
    id: new FormControl('')

  });
  }

  onSubmit() {
    let date= moment(Date.now()).locale('fa').format('YYYY/M/D');
    this.commentForm.controls.date.setValue(date);

    this.commentForm.controls.id.setValue(this.id);
    this.service.newComment(this.commentForm.value).subscribe((response) => {
      console.log(response);
      if (response['success'] === true){
        alert("ok");
        // this.messageService.add({severity: 'success', summary: 'ثبت با موفقیت انجام شد', detail: 'کاربر عزیز نظر شما پس از تایید نمایش داده میشود با تشکر'});
      }
    });
  }
}
