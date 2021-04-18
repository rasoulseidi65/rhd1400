import {Component, OnInit} from '@angular/core';
import {LayoutService} from '../layout.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  listCourse: any[];

  constructor(private service: LayoutService) {
  }

  ngOnInit(): void {
    this.service.listCourse().subscribe((response) => {
      if (response['success'] === true) {
        console.log(response)
        this.listCourse = response['data'];

      }
    });
  }
  listViewMax(){
    this.service.listViewMaxCourse().subscribe((response) => {
      if (response['success'] === true) {
        this.listCourse = response['data'];

      }
    });
  }
  listNewCourse(){
    this.service.listNewCourse().subscribe((response) => {
      if (response['success'] === true) {
        this.listCourse = response['data'];

      }
    });
  }
  onChangeCourse(id: any) {

    switch (id) {
      case 0: {
        this.ngOnInit();
        break;
      }
      case 1: {
       this.listViewMax();
        break;
      }
      case 3: {
        this.listNewCourse();
        break;
      }
    }
  }
}
