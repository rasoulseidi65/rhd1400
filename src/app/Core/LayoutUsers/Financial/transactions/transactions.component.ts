import {Component, OnInit} from '@angular/core';
import {LayoutuserService} from '../../layoutuser.service';
import {LocalStorageService} from '../../../../auth/localStorageLogin/local-storage.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  listPayment;

  constructor(private service: LayoutuserService,
              private localstorage: LocalStorageService) {
  }

  ngOnInit() {
    if (this.localstorage.getCurrentUser() === true) {
      this.service.displayPayment(this.localstorage.userJson['_id']).subscribe((response) => {
      console.log(response)
        if (response['success'] === true) {
          this.listPayment = response['data'];
        }
      });
    }
  }

}
