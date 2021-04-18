import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuportRoutingModule } from './suport-routing.module';
import { SupportComponent } from './support/support.component';
import {LayoutModule} from '../layout.module';


@NgModule({
  declarations: [SupportComponent],
  imports: [
    CommonModule,
    SuportRoutingModule,
    LayoutModule
  ]
})
export class SuportModule { }
