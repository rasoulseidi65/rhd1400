import {Component, Injectable, OnInit} from '@angular/core';


import {OwlOptions} from 'ngx-owl-carousel-o';
import {FormBuilder} from "@angular/forms";
import {AdminService} from "../../Core/LayoutAdmin/admin.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  // images: any[];
  //
  // responsiveOptions: any[] = [
  //   {
  //     breakpoint: '1024px',
  //     numVisible: 5
  //   },
  //   {
  //     breakpoint: '768px',
  //     numVisible: 3
  //   },
  //   {
  //     breakpoint: '560px',
  //     numVisible: 1
  //   }
  // ];
  listslider:any[];
  customOptions: OwlOptions = {
    rtl: true,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoHeight:false,
    nav: true,
    navText: ['<i class="fa fa-chevron-left fa-2x"></i>', '<i class="fa fa-chevron-right fa-2x"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    }
  };
  constructor(public service: AdminService) { }

  ngOnInit(): void {
      this.sliderget();
    // this.photoService.getImages().then(images =>{ this.images = images;  console.log(this.images)});
  }
  sliderget(){
    this.service.getSlider().subscribe((result) => {
      if (result['success'] === true){
        this.listslider = result['data'];
      }
    });
  }
}


