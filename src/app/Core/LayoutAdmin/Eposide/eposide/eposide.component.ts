import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EposideService} from '../eposide.service';

@Component({
  selector: 'app-eposide',
  templateUrl: './eposide.component.html',
  styleUrls: ['./eposide.component.scss']
})
export class EposideComponent implements OnInit {
  eposideForm: FormGroup;
  cols: any[];
  eposide = {
    courseID: '',
    title: '',
    type: '',
    videoUrl: '',
    body: '',
    number: '',
    time: '',

  };
  course: any[];

  constructor(private fb: FormBuilder, private eposideService: EposideService) {
  }

  ngOnInit() {
    this.indexCourse();
    this.eposideForm = this.fb.group({
      'courseID': new FormControl(''),
      'title': new FormControl('', Validators.required),
      'type': new FormControl('', Validators.required),
      'videoUrl': new FormControl('', Validators.required),
      'body': new FormControl('', Validators.required),
      'number': new FormControl('', Validators.required),
      'viewCount': new FormControl(''),
      'commentCount': new FormControl(''),
      'downloadCount': new FormControl(''),
      'time': new FormControl('', Validators.required)
    });
    this.cols = [
      {field: 'title', header: 'عنوان جلسه'},
      {field: 'time', header: 'زمان جلسه'},
      {field: 'type', header: 'نوع جلسه'},

    ];
  }

  indexCourse() {
    this.eposideService.indexCourse().subscribe((result) => {
      if (result['success'] === true) {
        this.course = result['data'];

      }
    });
  }
  onUpload(event) {
    const formData = new FormData();
    for (let i = 0; i < event.files.length; i++) {
      formData.append('video', event.files[i], event.files[i]['name']);
    }
    this.eposideService.uploadVideo(formData).subscribe((response) => {
      if (response['success'] === true) {
        this.eposide.videoUrl = response['videoPath'];
        console.log( this.eposide.videoUrl)
      } else {
      }
    });
  }

  storeEposide() {
    this.eposideService.storeEposide(this.eposide).subscribe((result) => {
      if (result['success'] === true) {
        alert('ثبت شد')
      }
    });
  }
  clearInputText(){

  }
}
