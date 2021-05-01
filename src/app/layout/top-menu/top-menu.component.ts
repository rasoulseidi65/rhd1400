import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';
import {CartService} from '../../serviceCart/cart.service';
import {Router} from '@angular/router';
import {LocalStorageService} from '../../auth/localStorageLogin/local-storage.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  @ViewChild('basketDropDown', {static: false}) basketDropDown: ElementRef;
  @ViewChild('category', {static: false}) category: ElementRef;
  @ViewChild('navBar', {static: false}) navBar: ElementRef;
  @ViewChild('accountDropDown',  {static: false}) accountDropDown: ElementRef;
  cartlist: any[] = [];
  lengthCartlist = 0;
  sumOfPrice = 0;
  countBadge = 0;
  showCartList = true;
  isLogged: boolean;
  constructor(private deviceService: DeviceDetectorService,
              private serviceCart: CartService,
              private route: Router,
              private localstorage: LocalStorageService) {
  }

  ngOnInit(): void {
    this.isLogged = this.localstorage.getCurrentUser();
    setInterval(() => {
      this.getAllPrice();
    }, 1000);
  }

  toggleBasketDropDown(): void {
    this.basketDropDown.nativeElement.classList.toggle('indicator-display');
    this.basketDropDown.nativeElement.classList.toggle('indicator-open');
  }

  openBasketDropDown(): void {
    if (this.deviceService.isDesktop() === true) {
      this.basketDropDown.nativeElement.classList.add('indicator-display');
      this.basketDropDown.nativeElement.classList.add('indicator-open');
    }
  }

  closeBasketDropDown(): void {
    this.basketDropDown.nativeElement.classList.remove('indicator-display');
    this.basketDropDown.nativeElement.classList.remove('indicator-open');
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

  goPageCart() {
    this.localstorage.getCurrentUser();
    if (this.localstorage.userJson != null) {
      this.route.navigate(['/home/cart']);
    }
    else{
      this.route.navigate(['/auth/login']);
    }
  }
  toggleAccountDropDown(): void {
    this.accountDropDown.nativeElement.classList.toggle('topbar-dropdown--opened');
  }

  closeAccountDropDown(): void {
    this.accountDropDown.nativeElement.classList.remove('topbar-dropdown--opened');
  }

  openAccountDropDown(): void {
    if (this.deviceService.isDesktop() === true) {
      this.accountDropDown.nativeElement.classList.add('topbar-dropdown--opened');
    }
  }
  exitUser() {
    this.localstorage.removeCurrentUser();
    this.ngOnInit();
  }
}
