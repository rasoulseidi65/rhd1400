import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {LayoutService} from '../../../layout.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'article-content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.css']
})
export class ContentBodyComponent implements OnInit {
  @Input() data: any;
  articleID: any;
  article: any;
  constructor(private route: ActivatedRoute,private service: LayoutService) { }

  ngOnInit(): void {
    this.loadArtile();
  }
  loadArtile() {
    this.route.paramMap.subscribe(params =>
      this.articleID = params.get('id'));
    this.service.findArticle(this.articleID).subscribe((response) => {
      if (response['success'] === true) {
        this.article = response['data'];
      }
    });
  }
}
