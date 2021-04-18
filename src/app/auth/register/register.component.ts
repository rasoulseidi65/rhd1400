import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {UsersService} from '../Users.service';
import {LocalStorageService} from '../localStorageLogin/local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {
  userform: FormGroup;

  submitted: boolean;
  selectUser: string;

  constructor(private fb: FormBuilder,
              private messageService: MessageService,
              private UsersService: UsersService,
              private localstorage:LocalStorageService,
              private router:Router) {
  }

  ngOnInit(): void {

    this.userform = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      mobile: new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(value: string) {
    this.submitted = true;
      this.UsersService.register(this.userform.value).subscribe((response) => {
        if (response['success'] === true) {
          let data=response['data']
          this.localstorage.saveCurrentUser(JSON.stringify(data));
          this.router.navigate(['/']);
          this.messageService.add({severity: 'success', summary: 'ثبت با موفقیت', detail: 'کاربر مشخصات با موفقیت ثبت شد'});
        } else {
          this.messageService.add({severity: 'error', summary: 'اخطار', detail: response['data']});

        }

      });


  }
}
