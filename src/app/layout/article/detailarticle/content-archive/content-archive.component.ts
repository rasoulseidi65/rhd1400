import {Component, Input, OnInit} from '@angular/core';
import {LayoutService} from '../../../layout.service';

@Component({
  selector: 'article-content-archive',
  templateUrl: './content-archive.component.html',
  styleUrls: ['./content-archive.component.css']
})
export class ContentArchiveComponent implements OnInit {
  @Input() data: any;
  newestArticle: any;

  constructor(private service: LayoutService) {
  }

  ngOnInit(): void {
    this.loadNewestArticle();
  }

  loadNewestArticle() {
    this.service.newestArticle().subscribe((response) => {
      if (response['success'] === true) {
        this.newestArticle = response['data'];
      }
    });
  }
}
