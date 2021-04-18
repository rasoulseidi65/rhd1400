import {Component, Input, OnInit} from '@angular/core';
import {LayoutService} from '../layout.service';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  courseID: any;
  course: any;

  constructor(private service: LayoutService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>
      this.courseID = params.get('id'));
    let data = {
      _id: this.courseID
    };
    this.service.findCourse(data).subscribe((response) => {
      console.log(response)
      if (response['success'] === true) {
        this.course = response['data'][1];
      }
    });

  }
}
