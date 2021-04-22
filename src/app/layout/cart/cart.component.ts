import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {CartService} from '../../serviceCart/cart.service';
import {LayoutService} from '../layout.service';
import {LocalStorageService} from '../../auth/localStorageLogin/local-storage.service';
import * as moment from 'jalali-moment';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [MessageService]
})
export class CartComponent implements OnInit {
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  cartlist: any[] = [];
  lengthCartlist = 0;
  sumOfPrice = 0;
  countBadge = 0;
  showCartList = true;
  public payment = {
    userID: '',
    mobile: '',
    price: '',
    date: '',
    time: ''
  };

  constructor(private serviceCart: CartService,
              private service: LayoutService,
              private localstorage: LocalStorageService) {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.getAllPrice();
    }, 1000);
  }

  getAllPrice(): void {
    this.cartlist = this.serviceCart.getItems();
    this.sumOfPrice = 0;
    this.countBadge = 0;
    this.showCartList = true;
    this.lengthCartlist = this.cartlist.length;
    if (this.cartlist != null) {
      if (this.cartlist.length > 0) {
        for (let i = 0; i < this.cartlist.length; i++) {
          this.countBadge++;
          this.sumOfPrice += Number(this.cartlist[i]['cartList'].price);
          this.showCartList = false;
        }
      }
    }

  }

  onDeleteCart(item: any): void {
    this.serviceCart.deleteItem(item);
    this.cartlist = this.serviceCart.getItems();
    this.getAllPrice();
  }

  onPayment() {
    this.localstorage.getCurrentUser();
    this.payment.userID = this.localstorage.userJson['_id'];
    this.payment.mobile = this.localstorage.userJson['mobile'];
    this.payment.date = moment(Date.now()).locale('fa').format('YYYY/M/D');
    this.payment.time = moment(Date.now()).locale('fa').format('HH:mm:ss');
    this.payment.price = this.sumOfPrice.toString()
    let data = {
      product: JSON.parse(localStorage.getItem('cartList')),
      user: this.payment,
    };
    this.service.onPayment(data).subscribe((response) => {
      let url = response['data'];
      console.log(response);
      document.location.href = url;
    });
  }
}

