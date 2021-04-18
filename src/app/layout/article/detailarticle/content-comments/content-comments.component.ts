import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'article-content-comments',
  templateUrl: './content-comments.component.html',
  styleUrls: ['./content-comments.component.css']
})
export class ContentCommentsComponent implements OnInit {
  @Input() data: any;
  ArticleForm: FormGroup;
  constructor() { }

  ngOnInit(): void {

  }

}
