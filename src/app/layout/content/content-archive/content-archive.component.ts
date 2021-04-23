import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../../../serviceCart/cart.service';

@Component({
  selector: 'app-content-archive',
  templateUrl: './content-archive.component.html',
  styleUrls: ['./content-archive.component.css']
})
export class ContentArchiveComponent implements OnInit {
  @Input() data: any;
  displayBasic:boolean;
  constructor(private serviceCart:CartService) { }

  ngOnInit(): void {

    // setTimeout(()=>{
    //   // console.log(this.data)
    // },3000)
  }
  addCart(product: any): void {
      this.serviceCart.addToCart(product);
    this.displayBasic = true;
  }

}
