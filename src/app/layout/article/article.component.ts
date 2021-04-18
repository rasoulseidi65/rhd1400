import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../layout.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  listArticle: any[];
  constructor(private service: LayoutService) { }

  ngOnInit(): void {
    this.service.listArticle().subscribe((response) => {
      if (response['success'] === true) {
        this.listArticle = response['data'];

      }
    });
  }

}
