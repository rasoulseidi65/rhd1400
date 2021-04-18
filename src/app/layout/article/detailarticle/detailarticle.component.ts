import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LayoutService} from '../../layout.service';

@Component({
  selector: 'app-detailarticle',
  templateUrl: './detailarticle.component.html',
  styleUrls: ['./detailarticle.component.scss']
})
export class DetailarticleComponent implements OnInit {
  articleID: any;
  article: any;

  constructor(private route: ActivatedRoute,
              private service: LayoutService) {
  }

  ngOnInit() {
    this.loadArtile();
  }

  loadArtile() {
    this.route.paramMap.subscribe(params =>
      this.articleID = params.get('id'));
    this.service.findArticle(this.articleID).subscribe((response) => {
      console.log(response);
      if (response['success'] === true) {
        this.article = response['data'];
      }
    });
  }
}
