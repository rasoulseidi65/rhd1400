import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import {AboutUsComponent} from './about-us/about-us.component';
import {LayoutModule} from '../layout/layout.module';


@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    LayoutModule
  ]
})
export class AboutModule { }
