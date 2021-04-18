import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss']
})
export class BankAccountComponent implements OnInit {
   userAcuunt: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userAcuunt = this.fb.group({
      cardNumber: new FormControl('', Validators.required),
      accountNumber: new FormControl('', Validators.required),
      shabaNumber: new FormControl('', Validators.required)
    });
  }

  onSubmit(data: any) {

  }
}
