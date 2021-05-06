import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showMenu: boolean = true;
  pageTitle: string;

  constructor(private router: Router, private titleMeta: Title, private  meta: Meta) {

  }

  ngOnInit(): void {
    this.pageTitle = 'آکادمی همراه دانش';
    this.titleMeta.setTitle(this.pageTitle);
    this.meta.addTags([
          { charset: 'UTF-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'date', content: '2020-02-10', scheme: 'YYYY-MM-DD' },
          { name: 'keywords', content: 'Add SEO Meta in Angular.' },
          { name: 'author', content: 'همراه دانش' },
          { name: 'robots', content: 'index, follow' }
        ]);
    // this.meta.addTag({keywords:'آکادمی آموزشی همراه دانش ، همراه دانش،'});

  }
}
