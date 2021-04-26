import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../admin.service';
import {MessageService, SelectItem} from 'primeng/api';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.scss'],
  providers: [MessageService]
})
export class MajorComponent implements OnInit {
  formmajor: FormGroup;
  listmajor:any[];
  mardak: SelectItem[];
  categoryQuestionID: string;
  constructor(private fb: FormBuilder , private servicemajor: AdminService , private messageService: MessageService) {
    this.mardak = [
      {label: 'انتخاب کنید', value: 'انتخاب کنبد'}

    ];
  }

  ngOnInit() {
    this.majorform();
    this.getmajor();
    this.getGrade()
  }
  majorform(){
    this.formmajor = this.fb.group({
      title: new FormControl('' , Validators.required),
      gradeID: new FormControl('' , Validators.required),
      image: new FormControl('' , Validators.required)
    });
  }
  onsub(value: string){
    this.servicemajor.postMajor(this.formmajor.value).subscribe((result)=>{
      if (result['success'] === true) {
        this.messageService.add({severity: 'success', summary: 'ثبت با موفقیت انجام شد', detail: 'رشته تحصیلی با موفقیت ثبت شد'});
        this.getmajor();
      }
    });
  }
  onUpload(event) {
    const formData = new FormData();
    for (let i = 0; i < event.files.length; i++) {
      formData.append('image', event.files[i], event.files[i]['name']);
    }
    this.servicemajor.uploadFiles(formData).subscribe((response) => {

      if (response['success'] === true) {
        let path='http://api.hd724.com/'+response['data'].path;
        this.messageService.add({severity: 'success', summary: 'ثبت با موفقیت انجام شد', detail: 'تصویر با موفقیت ثبت شد'});

        this.formmajor.get('image').setValue(path);
      } else {

      }
    });
  }

  deletemajor(id){
    this.servicemajor.deleteMajor(id).subscribe((result)=>{
      if (result['success'] === true){
        this.messageService.add({severity: 'success', summary: 'موفق ', detail: 'حذف شد'});
        this.getmajor();
      }
    });
  }
  setGradeID(e) {
    let z = this.mardak.filter(x => x.label === e.target.value);
    this.formmajor.get('gradeID').setValue(z[0].value);

  }
  getmajor(){
    this.servicemajor.GetMajor().subscribe((result)=>{
      if (result['success'] === true){
        this.listmajor=result['data'];
      }
    });
  }
  getGrade(){
    this.servicemajor.getGrade().subscribe((result)=>{
      if (result['success'] === true){
        for(let i=0;i<result['data'].length;i++) {
          let data = result['data'];
          this.mardak.push({
            label: data[i]['title'],
            value: data[i]['_id']
          })
        }
      }
    });
  }
}
