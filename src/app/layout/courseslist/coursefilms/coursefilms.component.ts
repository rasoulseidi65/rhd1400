import {Component, OnInit} from '@angular/core';
import {LayoutService} from '../../layout.service';
import {request} from 'express';
import {CartService} from '../../../serviceCart/cart.service';

@Component({
  selector: 'app-coursefilms',
  templateUrl: './coursefilms.component.html',
  styleUrls: ['./coursefilms.component.scss']
})
export class CoursefilmsComponent implements OnInit {
  listCourse: any[];
  displayBasic: boolean = false;

  constructor(private service: LayoutService,
              private serviceCart: CartService) {
  }

  ngOnInit() {
    this.GetListFilm();
  }

  GetListFilm() {
    this.service.listCourse().subscribe((respanse) => {
      if (respanse['success'] === true) {
        this.listCourse = respanse['data'];
      }
    });
  }

  addCart(product: any): void {
    this.serviceCart.addToCart(product);
    this.displayBasic = true;
  }
}
