import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';
import { LayoutuserService } from '../layoutuser.service';
import {LocalStorageService} from '../../../auth/localStorageLogin/local-storage.service';



@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.scss']
})
export class UserSettingComponent implements OnInit {
  userForm: FormGroup;
  userInfo = {
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    state: '',
    city: '',
    address: '',
    profile: ''
  }
  constructor(private fb: FormBuilder,
              private service: LayoutuserService,
              private localstorage: LocalStorageService) {
  }
  loadUserInfo(){
    this.userInfo.firstName = this.localstorage.userJson[' firstName '],
      this.userInfo.lastName = this.localstorage.userJson[' lastName '],
      this.userInfo.mobile = this.localstorage.userJson[' mobile '],
      this.userInfo.email = this.localstorage.userJson[' email '],
      this.userInfo.state = this.localstorage.userJson[' state '],
      this.userInfo.city = this.localstorage.userJson[' city '],
      this.userInfo.address = this.localstorage.userJson[' address '],
      this.userInfo.profile = this.localstorage.userJson[' profile ']

  }
  ngOnInit() {
    this.loadUserInfo();
    this.createUserForm();
  }

  createUserForm() {
    this.userForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      mobile: new FormControl(this.localstorage.userJson[' mobile'], Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])),
      email: new FormControl(this.localstorage.userJson[' email'], Validators.compose([Validators.required, Validators.email])),
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      profile: new FormControl('', Validators.required)
    });
  }

  onSubmit(x: any) {
     this.service.UpdateUser(this.userForm.value, this.localstorage.userJson['_id']).subscribe((response)=>{
       console.log(response);
     });
  }

  onUpload(event) {
    const formData = new FormData();
    for (let i = 0; i < event.files.length; i++) {
      formData.append('image', event.files[i], event.files[i]['name']);
    }
    this.service.uploadFile(formData).subscribe((response) => {
      console.log(response);
      if (response['success'] === true) {
        this.userForm.get('image').setValue(response['imagePath']);
      } else {
        console.log(response);
      }
    });
  }
}

