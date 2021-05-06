import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../admin.service';
import {paper} from '../../paper/paper.model';
import {commentsModel} from '../comments.model';
import {MessageService} from 'primeng/api';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-listcomment',
  templateUrl: './listcomment.component.html',
  styleUrls: ['./listcomment.component.scss'],
  providers: [MessageService]
})
export class ListcommentComponent implements OnInit {
  public commentModels: commentsModel[] = [];
  cols: any[];
  display: boolean = false;
  displayReplay: boolean = false;
  commentID: any;
  commentform: FormGroup;

  constructor(private service: AdminService,
              private messageService: MessageService
    , private fb: FormBuilder) {
  }

  ngOnInit() {
    this.cols = [
      {field: 'fullName', header: 'مشخصات کاربر'},
      {field: 'text', header: 'متن'},
      {field: 'email', header: 'ایمیل'},
      {field: 'date', header: 'تاریخ'}
    ];
    this.getComment();
    this.commentform = this.fb.group({
      name: new FormControl(''),
      replay: new FormControl(''),
      comment_Id: new FormControl(''),
      date: new FormControl(''),
      time: new FormControl('')
    });
  }


  getComment() {
    this.service.getComments().subscribe((response) => {
      if (response['success'] === true) {
        console.log(response)
        this.commentModels = response['data'];
      }
    });
  }

  closeDialogDelete() {
    this.display = false;
  }

  showDialogDelete(paperID: any) {
    this.commentID = paperID;
    this.display = true;
  }

  showDialogdReplay(commentID: any) {
    this.commentform.get('comment_Id').setValue(commentID);
    this.displayReplay = true;
  }

  onSubmit() {
    this.service.postAnswer(this.commentform.value).subscribe((response) => {
      if (response['success'] === true) {
        this.messageService.add({severity: 'success', summary: 'ثبت با موفقیت انجام شد', detail: ' پاسخ با موفقیت ثبت شد'});
        this.displayReplay = false;
      }
    });
  }

  activeComment(id:any,e) {
    let data = {
      active: e.checked
    };
    this.service.updateComment(id, data).subscribe((response) => {
      if (response['success'] === true) {
        this.messageService.add({severity: 'success', summary: 'موفق', detail:response['data']});
        this.getComment()
      }
    });

  }

  onDestory() {
    this.service.deleteComment(this.commentID).subscribe((response) => {
      if (response['success'] === true) {
        this.display = false;
        this.getComment();
        this.messageService.add({severity: 'success', summary: 'حذف با موفقیت انجام شد', detail: 'مشخصات مقاله با موفقیت حذف شد'});
      }
    });
  }
}
