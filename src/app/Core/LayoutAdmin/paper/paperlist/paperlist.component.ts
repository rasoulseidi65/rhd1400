import {Component, OnInit} from '@angular/core';
import {paper} from '../paper.model';
import {PaperService} from '../paper.service';
import {MessageService, SelectItem} from 'primeng/api';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-paperlist',
  templateUrl: './paperlist.component.html',
  styleUrls: ['./paperlist.component.scss'],
  providers: [MessageService]
})
export class PaperlistComponent implements OnInit {
  display: boolean = false;
  displayEdit: boolean = false;
  public paperModels: paper[] = [];
  cols: any[];
  title: SelectItem[];
  abstract: SelectItem[];
  date: number;
  userform: FormGroup;
  submitted: boolean;
  description: string;
  ResultSearchPaper: paper[] = [];
  paperID: any;

  constructor(private paperService: PaperService, private messageService: MessageService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.ResultSearchPaper.push(
      {
        _id: '',
        title: '',
        abstract: '',
        detail: '',
        author: '',
        image: '',
        date: '',
        time: ''
      });
    this.paperService.index().subscribe(response => {
      if (response['success'] === true) {
        this.paperModels = response['data'];
      }
    });

    this.cols = [
      {field: 'title', header: 'عنوان'},
      {field: 'abstract', header: 'خلاصه'},
      {field: 'author', header: 'نویسنده'},
      {field: 'date', header: 'تاریخ'}
    ];

    this.userform = this.fb.group({
      '_id': new FormControl(''),
      'title': new FormControl('', Validators.required),
      'abstract': new FormControl('', Validators.required),
      'detail': new FormControl('', Validators.required),
      'author': new FormControl('', Validators.required),
      'image': new FormControl(''),
      'date': new FormControl('', Validators.required),
      'time': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.submitted = true;
    // this.userform.get().value
    console.log(this.userform.value);
    this.paperService.update(this.userform.value).subscribe((response) => {
      console.log(response);
    });

    this.messageService.add({severity: 'success', summary: 'ویرایش با موفقیت انجام شد', detail: 'مشخصات مقاله با موفقیت ثبت شد'});
  }

  closeDialogDelete() {
    this.display = false;
  }

  showDialogDelete(paperID: any) {
    this.paperID = paperID;
    this.display = true;
  }

  onDestory() {
    this.paperService.destory(this.paperID).subscribe((response) => {
      if (response['success'] === true) {
        this.display = false;

        this.paperService.index().subscribe(response => {
          if (response['success'] === true) {
            this.paperModels = response['data'];
          }

        });
        this.messageService.add({severity: 'success', summary: 'حذف با موفقیت انجام شد', detail: 'مشخصات مقاله با موفقیت حذف شد'});
      }
    });
  }

  showDialogEdit(paperID: any) {
    let result = this.paperModels.find(x => x._id === paperID);
    this.ResultSearchPaper.pop();
    this.ResultSearchPaper.push(result);
    console.log(this.ResultSearchPaper);
    this.userform.get('_id').setValue(this.ResultSearchPaper[0]._id);
    this.displayEdit = true;
  }
}
