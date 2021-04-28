import { Component, OnInit } from '@angular/core';
import {LayoutuserService} from '../layoutuser.service';
import {LocalStorageService} from '../../../auth/localStorageLogin/local-storage.service';

@Component({
  selector: 'app-my-sales',
  templateUrl: './my-sales.component.html',
  styleUrls: ['./my-sales.component.scss']
})
export class MySalesComponent implements OnInit {

  listbasket: any[];
  constructor(private service: LayoutuserService
    , private localstorage: LocalStorageService) { }

  ngOnInit() {
    this.mySales();
  }
  mySales(){
    this.localstorage.getCurrentUser();
    this.service.mySales(this.localstorage.userJson['_id']).subscribe((result)=>{
      if (result['success'] === true){
        this.listbasket=result['data'];
        console.log(this.listbasket)
      }
    });
  }

}
