import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';


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
  formGroup: FormGroup;

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
  get formArray(): AbstractControl | null {
    return this.formGroup.get('formArray');
  }

  constructor(private _formBuilder:FormBuilder) {



  }

  ngOnInit(): void {


    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          image: new FormControl('', Validators.required),
        }),
        this._formBuilder.group({
          image: new FormControl('', Validators.required),
        }),
        this._formBuilder.group({
          firstName: new FormControl('', Validators.required),
          lastName: new FormControl('', Validators.required),
          mobile: new FormControl('', Validators.required),
          phone: new FormControl('', Validators.required),
          state: new FormControl('', Validators.required),
          city: new FormControl('', Validators.required),
          postalCode: new FormControl('', Validators.required),
          plaque: new FormControl('', Validators.required),
          address: new FormControl('', Validators.required),
        }),
        this._formBuilder.group({
          ServiceType: new FormControl(''),

        }),
        this._formBuilder.group({
          offerPercent: new FormControl(''),

        }),
        this._formBuilder.group({
          uploadFile: ['']
        }),
      ])
    });

  }






}

