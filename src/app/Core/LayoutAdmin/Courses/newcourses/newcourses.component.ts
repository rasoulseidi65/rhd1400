import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService, SelectItem, TreeNode} from 'primeng/api';
import {CoursesService} from '../courses.service';
import {TeacherService} from '../../teacher/teacher.service';
import * as moment from 'jalali-moment';
@Component({
  selector: 'app-newcourses',
  templateUrl: './newcourses.component.html',
  styleUrls: ['./newcourses.component.scss'], providers: [MessageService]
})
export class NewcoursesComponent implements OnInit {
  courseForm: FormGroup;
  submitted: boolean;
  categories: SelectItem[];
  crash: SelectItem[];
  teachers: SelectItem[] = [];
  files1: TreeNode[];
  cols: any[];

  constructor(private fb: FormBuilder,
              private messageService: MessageService,
              private courseService: CoursesService
    , private TeacherService: TeacherService) {
    this.categories = [
      {label: 'برنامه نویسی', value: 'برنامه نویسی'},
      {label: 'شبکه های کامپیوتری', value: 'شبکه های کامپیوتری'},
      {label: 'گرافیک', value: 'گرافیک'},
      {label: 'ریاضی', value: 'ریاضی'},
    ];
    this.crash = [
      {label: 'رایگان', value: 'رایگان '},
      {label: 'نقدی', value: 'نقدی  '},

    ];
  }

  ngOnInit() {
    this.getTeacher();
    this.courseForm = this.fb.group({
      title: new FormControl('', Validators.required),
      categories: new FormControl('', Validators.required),
      detail: new FormControl('', Validators.required),
      teacherID: new FormControl('', Validators.required),
      courseChapter: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      viewCount: new FormControl('',),
      commentCount: new FormControl(''),
      type: new FormControl(''),
      image: new FormControl(''),
      timeCourse: new FormControl('',),
      date: new FormControl('',),
      time: new FormControl('',)
    });
    this.cols = [
      {field: 'titlechapter', header: 'نام'},
      {field: 'title', header: 'فامیلی'},
      {field: 'link', header: 'موبایل'},

    ];

  }

  convertPrice(event: any) {

  }

  onSubmit(value: string) {
    this.submitted = true;
    this.courseForm.controls['date'].setValue(moment(Date.now()).locale('fa').format('YYYY/M/D'))
    this.courseForm.controls['time'].setValue(moment(Date.now()).locale('fa').format('HH:mm:ss'))
    this.courseService.registerCourse(this.courseForm.value).subscribe((response) => {
      if (response['success'] === true) {
        this.messageService.add({severity: 'success', summary: 'ثبت با موفقیت انجام شد', detail: 'مشخصات دوره با موفقیت ثبت شد'});
      }
    });

  }

  onUpload(event) {
    const formData = new FormData();
    for (let i = 0; i < event.files.length; i++) {
      formData.append('image', event.files[i], event.files[i]['name']);
    }
    this.courseService.uploadFile(formData).subscribe((response) => {
      console.log(response)
      if (response['success'] === true) {
        this.courseForm.get('image').setValue(response['imagePath']);
      } else {

      }
    });
  }

  getTeacher() {
    this.courseService.getTeacher().subscribe((response) => {
      if (response['success'] === true) {
        console.log(response['data']);
        this.teachers.push({label: response['data'][0]['firstName'] + response['data'][0]['lastName'], value: response['data'][0]['_id']});

      }
    });
  }
}
