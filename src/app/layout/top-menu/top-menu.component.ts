import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  @ViewChild('basketDropDown',{static: false}) basketDropDown: ElementRef;
  @ViewChild('category',{static: false}) category: ElementRef;
  @ViewChild('navBar',{static: false}) navBar: ElementRef;

  constructor(private deviceService: DeviceDetectorService) {
  }

  ngOnInit(): void {
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
}
