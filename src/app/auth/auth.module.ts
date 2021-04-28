import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LayoutModule} from '../layout/layout.module';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {KeyFilterModule} from 'primeng/keyfilter';
import {MessageModule} from 'primeng/message';
import {CaptchaModule, CheckboxModule, InputTextModule, RadioButtonModule} from 'primeng/primeng';
import {MatRadioModule} from '@angular/material';
import { LoginAdminComponent } from './login-admin/login-admin.component';




@NgModule({
  declarations: [LoginComponent,RegisterComponent, LoginAdminComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        LayoutModule,
        PasswordModule,
        ButtonModule,
        ReactiveFormsModule,
        ToastModule,
        KeyFilterModule,
        MessageModule,
        RadioButtonModule,
        MatRadioModule,
        FormsModule,
        CaptchaModule,
        CheckboxModule,
        InputTextModule
    ],

})
export class AuthModule { }
