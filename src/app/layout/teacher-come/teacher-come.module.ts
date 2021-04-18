import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherComeRoutingModule } from './teacher-come-routing.module';
import { TeacherpageComponent } from './teacherpage/teacherpage.component';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AccordionModule} from 'primeng/accordion';
import {LayoutModule} from '../layout.module';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {FileUploadModule} from 'primeng/fileupload';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [TeacherpageComponent],
  imports: [
    CommonModule,
    TeacherComeRoutingModule,
    ButtonModule,
    InputTextareaModule,
    AccordionModule,
    LayoutModule,
    MessageModule,
    ToastModule,
    PanelModule,
    FileUploadModule,
    ReactiveFormsModule
  ]
})
export class TeacherComeModule { }
