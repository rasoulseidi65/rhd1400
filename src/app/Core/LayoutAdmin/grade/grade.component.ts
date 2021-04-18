import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../admin.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss'],
  providers: [MessageService]
})
export class GradeComponent implements OnInit {
 formgrade: FormGroup;
 listgrad:any[];
  constructor(private fb: FormBuilder , private servicegrade: AdminService , private messageService: MessageService) { }

  ngOnInit() {
    this.gradeform();
    this.getCategoryQuestions();
  }
 gradeform(){
    this.formgrade = this.fb.group({
      title: new FormControl('' , Validators.required),
      image: new FormControl('' , Validators.required)
    });
 }
 onsub(value: string){
    this.servicegrade.postGrade(this.formgrade.value).subscribe((resault)=>{
      if (resault['success'] === true) {
        this.messageService.add({severity: 'success', summary: 'ثبت با موفقیت انجام شد', detail: 'مقطع با موفقیت ثبت شد'});
     this.getCategoryQuestions()
      }
    });
 }
  getCategoryQuestions(){
    this.servicegrade.getGrade().subscribe((resault)=>{
      if (resault['success'] === true){
        this.listgrad = resault['data'];
      }
    });
  }
  deletegrade(id){
    this.servicegrade.deleteGrade(id).subscribe((result)=>{
      if (result['success'] === true){
        this.messageService.add({severity: 'success', summary: 'موفق ', detail: 'حذف شد'});
        this.getCategoryQuestions();
      }
    });
  }
}
