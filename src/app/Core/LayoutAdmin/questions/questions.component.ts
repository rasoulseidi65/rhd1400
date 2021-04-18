import {Component, OnInit} from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../admin.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  providers: [MessageService]

})
export class QuestionsComponent implements OnInit {
  schooles: FormGroup;
  schoole: any[];
  grade: SelectItem[];
  major: SelectItem[];
  soal: SelectItem[];
  pasokhname: SelectItem[];
 resultMajor:string[];
  constructor(private fb: FormBuilder, private schoolserviec: AdminService, private messageService: MessageService) {
    this.grade = [
      {label: 'انتخاب کنید', value: 'انتخاب کنبد'}

    ];
    this.major = [
      {label: 'انتخاب کنید', value: 'انتخاب کنبد'}

    ];
    this.soal = [
      {label: 'انتخاب کنید', value: 'انتخاب کنید'},
      {label: 'تستی', value: 'تستی'},
      {label: 'تشریحی', value: 'تشریحی'},
      {label: 'تستی و تشریحی', value: 'تستی و تشریحی'},
    ];
    this.pasokhname = [
      {label: 'انتخاب کنید', value: 'انتخاب کنید'},
      {label: 'دارد', value: 'دارد'},
      {label: 'ندارد', value: 'ندارد'},
    ];

  }

  ngOnInit() {
    this.formschool();
    this.schooleget();
    this.getmaghta();
    this.getmajor();
  }

  formschool() {
    this.schooles = this.fb.group({
      majorID: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      linkFile: new FormControl('', Validators.required),
      count: new FormControl('', Validators.required),
      typeQuestion: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required),
      answer: new FormControl('', Validators.required),

    });
  }

  onsubmit(value: string) {
    console.log(this.schooles.value);
    this.schoolserviec.postschoole(this.schooles.value).subscribe((response) => {
      if (response ['success'] === true) {
        this.schooleget()
        this.messageService.add({severity: 'success', summary: 'ثبت با موفقیت انجام شد', detail: 'سوال با موفقیت ثبت شد'});

      }
    });
  }
  getMajor(e){
    this.major.splice(0,this.major.length);
    this.major.push({
      label:'انتخاب کنید',
      value: 'انتخاب کنید'
    });
    let result = this.resultMajor.filter(x => x['Grade'][0].title === e.target.value);
    for (let i = 0; i < result.length; i++) {

      this.major.push({
        label: result[i]['title'],
        value: result[i]['_id']
      });
    }

  }
  setMajorID(e) {
    let result= this.major.filter(x => x.label === e.target.value);
    this.schooles.get('majorID').setValue(result[0].value);

  }


  onUpload(event) {
    const formData = new FormData();
    for (let i = 0; i < event.files.length; i++) {
      formData.append('image', event.files[i], event.files[i]['name']);
    }
    this.schoolserviec.uploadFiles(formData).subscribe((response) => {

      if (response['success'] === true) {
        let path = 'http://api.hd724.com/' + response['data'].path;
        this.messageService.add({severity: 'success', summary: 'ثبت با موفقیت انجام شد', detail: 'تصویر با موفقیت ثبت شد'});

        this.schooles.get('linkFile').setValue(path);
      } else {

      }
    });
  }

  schooleget() {
    this.schoolserviec.getschoole().subscribe((response) => {
      if (response['success'] === true) {
        this.schoole = response ['data'];
      }
    });
  }

  shooldelete(id) {
    this.schoolserviec.deleteschoole(id).subscribe((result) => {
      if (result['success'] === true) {
        this.schooleget()
        this.messageService.add({severity: 'success', summary: 'موفق ', detail: 'حذف شد'});
      }
    });
  }

  getmaghta() {
    this.schoolserviec.getGrade().subscribe((result) => {
      if (result['success'] === true) {
        for (let i = 0; i < result['data'].length; i++) {
          let data = result['data'];
          this.grade.push({
            label: data[i]['title'],
            value: data[i]['_id']
          });
        }

      }
    });
  }
  getmajor() {
    this.schoolserviec.GetMajor().subscribe((result) => {
      if (result['success'] === true) {
        this.resultMajor=result['data'];
        for (let i = 0; i < result['data'].length; i++) {
          let data = result['data'];
          this.major.push({
            label: data[i]['title'],
            value: data[i]['_id']
          });
        }

      }
    });
  }
}
