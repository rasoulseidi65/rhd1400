import {Component, OnInit} from '@angular/core';
import {LayoutService} from '../../../layout/layout.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courseID;
  course;
  typeProduct;
  Episode;

  constructor(private service: LayoutService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>
      this.courseID = params.get('id'));
    let data = {
      _id: this.courseID
    };
    this.service.findCourse(data).subscribe((response) => {
      if (response['success'] === true) {
        this.typeProduct = 'course';
        this.course = response['data'];
        this.Episode = response['data'].Episode;
        console.log(this.Episode);
      }
    });
    this.service.findQuestion(this.courseID).subscribe((response) => {
      if (response['success'] === true) {
        this.typeProduct = 'question';
        this.course = response['data'];

      }
    });
    this.service.findHandout(this.courseID).subscribe((response) => {
      if (response['success'] === true) {
        this.typeProduct = 'handout';
        this.course = response['data'];

      }
    });

  }

}
