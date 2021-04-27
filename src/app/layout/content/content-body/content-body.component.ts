import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {LayoutService} from '../../layout.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.css']
})
export class ContentBodyComponent implements OnInit {
  @Input() data: any;
  @ViewChild('videoPlayer', {static: true}) videoplayer: ElementRef;
  courseID: any;
  course: any;

  constructor(private service: LayoutService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    // setTimeout(()=>{
    //   console.log(this.data)
    // },3000)
    this.route.paramMap.subscribe(params =>
      this.courseID = params.get('id'));
    let data = {
      _id: this.courseID
    };
    this.service.findCourse(data).subscribe((response) => {
      if (response['success'] === true) {
        this.course = response['data'];
        console.log(this.course['Episode'][0].videoUrl);
      }
    });

  }

  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

}
