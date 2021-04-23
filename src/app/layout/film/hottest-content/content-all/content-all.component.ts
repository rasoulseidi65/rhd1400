import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../../Core/LayoutAdmin/admin.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-content-all',
  templateUrl: './content-all.component.html',
  styleUrls: ['./content-all.component.scss']
})
export class ContentAllComponent implements OnInit {
  listshcool: any[];
  schooles: FormGroup;
  grade: SelectItem[];
  major: SelectItem[];
  resultMajor:string[];
  type:string;
  constructor(private service: AdminService , private fb: FormBuilder, private route: ActivatedRoute
) {
    this.grade = [
      {label: 'انتخاب کنید', value: 'انتخاب کنبد'}

    ];
    this.major = [
      {label: 'انتخاب کنید', value: 'انتخاب کنبد'}

    ];
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>
      this.type = params.get('type'));
    this.getlistshcool();
    this.getmajor();
    this.getgrade();

  }
  getlistshcool(){
    this.service.GetMajor().subscribe((result)=>{
      if (result['success'] === true){
        this.listshcool=result['data'];
      }
    });
  }
  getMajorTitle(e){

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
  getmajor() {
    this.service.GetMajor().subscribe((result) => {
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
  getgrade(){
    this.service.getGrade().subscribe((result)=>{
      if (result['success'] === true){
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

}
