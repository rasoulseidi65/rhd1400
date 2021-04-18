import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.css']
})
export class ContentBodyComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
    // setTimeout(()=>{
      //   console.log(this.data)
      // },3000)
  }

}
