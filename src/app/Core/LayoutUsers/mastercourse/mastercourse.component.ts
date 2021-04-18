import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LayoutuserService} from '../layoutuser.service';
import {SelectItem} from 'primeng/api';
import {LocalStorageService} from '../../../auth/localStorageLogin/local-storage.service';

interface Country {
  name: string;
  code: string;
}
@Component({
  selector: 'app-mastercourse',
  templateUrl: './mastercourse.component.html',
  styleUrls: ['./mastercourse.component.scss']
})
export class MastercourseComponent implements OnInit {
  courseForm: FormGroup;
  episodeForm: FormGroup;
  categories: SelectItem[];
  lisEpisode:any[]=[];
  listEpisodeFlag:boolean;

  constructor(private TF: FormBuilder,
              private service: LayoutuserService,
              private localstorage:LocalStorageService) {
    this.categories = [
      {label: 'برنامه نویسی', value: 'برنامه نویسی'},
      {label: 'شبکه های کامپیوتری', value: 'شبکه های کامپیوتری'},
      {label: 'گرافیک', value: 'گرافیک'},
      {label: 'ریاضی', value: 'ریاضی'},
    ];
  }

  ngOnInit() {
    this.CreatFormCourse();
    this.creatFormEpisode();


  }

  onSubmit(data: any) {
    this.courseForm.controls.userID.setValue(this.localstorage.userJson['_id']);
    let data1= {
      course: this.courseForm.value,
      episode: this.lisEpisode
    }
    console.log(this.lisEpisode)
   this.service.registerCourse(data1).subscribe((response)=>{
     this.courseForm = response['data'];
     console.log(response)
   });
  }

  CreatFormCourse(){
    this.courseForm = this.TF.group({
      userID: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      categories: new FormControl('', Validators.required),//دسته
      type: new FormControl('', Validators.required),//رایگان-نقدی
      detail: new FormControl('', Validators.required), //توضیحات تکمیلی
      abstract: new FormControl('', Validators.required),//توضیخات کوتاه
      price: new FormControl('', Validators.required),
      priceSupport: new FormControl('', Validators.required),//قیمت پشتیبانی
      image: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),//سطح
      titleTag: new FormControl('', Validators.required),
      keyTag: new FormControl('', Validators.required),
      timeCourse: new FormControl('', Validators.required), //زمان دوره
      sizeCourse: new FormControl('', Validators.required), //حجم دوره
      date: new FormControl(''),
      time: new FormControl('')
    });
   }
  creatFormEpisode(){
    this.episodeForm = this.TF.group({
      title: new FormControl('', Validators.required),//عنوان جلسه
      type: new FormControl('', Validators.required),//رایگتن-نقدی
      time: new  FormControl('', Validators.required), //مدت زمانجلسه
      Number: new  FormControl('', Validators.required), //شماره جلسه
      body: new  FormControl('', Validators.required), //توضیحات جلسه
      videoUrl: new  FormControl('', Validators.required) //لینک ویدئو
    });

  }
  onUpload(event) {

    const formData = new FormData();
    for (let i = 0; i < event.files.length; i++) {
      formData.append('image', event.files[i], event.files[i]['name']);
    }
    this.service.uploadFile(formData).subscribe((response) => {
      console.log(response);
      if (response['success'] === true) {
        this.courseForm.get('image').setValue(response['imagePath']);
      } else {
        console.log(response);
      }
    });
  }
  onUploadVideo(event) {
    const formData = new FormData();
    for (let i = 0; i < event.files.length; i++) {
      formData.append('video', event.files[i], event.files[i]['name']);
    }
    this.service.uploadVideo(formData).subscribe((response) => {
      console.log(response)
      if (response['success'] === true) {
        this.episodeForm.get('videoUrl').setValue(response['videoPath']);

      } else {
      }
    });
  }
  addEpisode(){
    this.lisEpisode.push({
      ...this.episodeForm.value
    });
 this.listEpisodeFlag=true;
}
  postEpisod(i:any) {
  this.lisEpisode.splice(i, 1);

}
}
