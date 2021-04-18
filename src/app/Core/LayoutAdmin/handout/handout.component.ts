import { Component, OnInit } from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-handout',
  templateUrl: './handout.component.html',
  styleUrls: ['./handout.component.scss'],
  providers: [MessageService]
})
export class HandoutComponent implements OnInit {
  formhandout: FormGroup;
  listhandout: any[];
  grade: SelectItem[];
  major: SelectItem[];
  resultMajor:string[];
  constructor(private fb: FormBuilder , private servicehandout: AdminService , private messageService: MessageService) {
    this.grade = [
      {label: 'انتخاب کنید', value: 'انتخاب کنبد'}

    ];
    this.major = [
      {label: 'انتخاب کنید', value: 'انتخاب کنبد'}

    ];
  }

  ngOnInit() {
    this.handoutform();
    this.getHandout();
    this.getGrade();
    this.getmajor();
  }
  handoutform() {
    this.formhandout = this.fb.group({
      title: new  FormControl('' , Validators.required),
      price: new  FormControl('' , Validators.required),
      linkFile: new  FormControl('' , Validators.required),
      countPage: new  FormControl('' , Validators.required),
      author: new  FormControl('' , Validators.required),
      section: new  FormControl('' , Validators.required),
      majorID: new  FormControl('' , Validators.required),
      text: new  FormControl('' , Validators.required)
    });
  }
  onsub(value: string) {
    this.servicehandout.posthandout(this.formhandout.value).subscribe((result) => {
      if (result ['success'] === true) {
        this.formhandout=result['data'];
        console.log(result)
        this.getHandout();
        this.messageService.add({severity: 'success', summary: 'ثبت با موفقیت انجام شد', detail: 'جزوه با موفقیت ثبت شد'});

      }
    });
  }
  onUpload(event) {
    const formData = new FormData();
    for (let i = 0; i < event.files.length; i++) {
      formData.append('image', event.files[i], event.files[i]['name']);
    }
    this.servicehandout.uploadFiles(formData).subscribe((response) => {

      if (response['success'] === true) {
        let path = 'http://api.hd724.com/' + response['data'].path;
        this.messageService.add({severity: 'success', summary: 'ثبت با موفقیت انجام شد', detail: 'تصویر با موفقیت ثبت شد'});

        this.formhandout.get('linkFile').setValue(path);
      } else {

      }
    });
  }
  getHandout(){
    this.servicehandout.gethandout().subscribe((result)=>{
      if (result['success'] === true){
        this.listhandout=result['data'];
      }
    });
  }
  deletehandout(id){
    this.servicehandout.deletehandout(id).subscribe((result)=>{
      if (result['success'] === true){
        this.getHandout();
        this.messageService.add({severity: 'success', summary: 'حذف با موفقیت انجام شد', detail: 'جزوه با موفقیت حذف شد'});
      }
    });
  }
  getGrade(){
    this.servicehandout.getGrade().subscribe((result)=>{
      if (result['success'] === true){
        for(let i=0;i<result['data'].length;i++) {
          let data = result['data'];
          this.grade.push({
            label: data[i]['title'],
            value: data[i]['_id']
          })
        }
      }
    });
  }
  setGradeID(e) {
    let z = this.grade.filter(x => x.label === e.target.value);
    this.formhandout.get('gradeID').setValue(z[0].value);

  }
  setMajorID(e) {
    let result= this.major.filter(x => x.label === e.target.value);
    this.formhandout.get('majorID').setValue(result[0].value);

  }
  getmajor() {
    this.servicehandout.GetMajor().subscribe((result) => {
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
