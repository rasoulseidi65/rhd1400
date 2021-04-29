import {Component, OnInit} from '@angular/core';
import {UsersService} from '../Users.service';
import {LocalStorageService} from '../localStorageLogin/local-storage.service';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {esLocale} from 'ngx-bootstrap/chronos';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss'],
  providers: [MessageService]
})
export class LoginAdminComponent implements OnInit {
  admin = {
    mobile: '',
    password: ''
  };

  constructor(private service: UsersService,
              private localstorage: LocalStorageService,
              private router: Router,
              private messageService: MessageService,) {
  }

  ngOnInit() {
  }

  login() {
    this.service.loginAdmin(this.admin).subscribe((response) => {
      if (response['success'] === true) {
        this.localstorage.saveCurrentUser(JSON.stringify(response['data']));
        this.router.navigate(['admin/panel']);
      }
      else {
        this.messageService.add({severity: 'error', summary: 'خطا', detail: 'مشخصات وارد شده اشتباه می باشد'});
      }
    });
  }
}
