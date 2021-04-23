import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../../../layout/layout.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LayoutuserService} from '../layoutuser.service';
import {LocalStorageService} from '../../../auth/localStorageLogin/local-storage.service';

@Component({
  selector: 'app-my-purchases',
  templateUrl: './my-purchases.component.html',
  styleUrls: ['./my-purchases.component.scss']
})
export class MyPurchasesComponent implements OnInit {
   formbaske: FormGroup;
   listbaske: any[];
  constructor(private service: LayoutuserService
              , private localstorage: LocalStorageService) { }

  ngOnInit() {
    this.getbasket();
  }
  getbasket(){
    this.localstorage.getCurrentUser();
    this.service.getbasket(this.localstorage.userJson['_id']).subscribe((result)=>{
      if (result['success'] === true){
        this.listbaske=result['data'];
      }
    });
  }
}
