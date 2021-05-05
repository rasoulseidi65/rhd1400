import {Component, OnInit} from '@angular/core';
import {LayoutService} from '../layout.service';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  listArticle: any[];
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
        items: 4
      }
    }
  };
  constructor(private service: LayoutService) {
  }

  ngOnInit(): void {
    this.service.listArticle().subscribe((response) => {
      if (response['success'] === true) {
        this.listArticle = response['data'];

      }
    });
  }

  updateViewCount(id: any, count: any) {
    let data = {
      _id: id,
      viewCount: count + 1
    };

    this.service.updateViewCountArticle(data).subscribe((response) => {

    });
  }
}
