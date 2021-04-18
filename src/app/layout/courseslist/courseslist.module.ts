import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseslistRoutingModule } from './courseslist-routing.module';
import { CoursefilmsComponent } from './coursefilms/coursefilms.component';
import { CourseArticlesComponent } from './course-articles/course-articles.component';
import {ButtonModule} from 'primeng/button';
import {LayoutModule} from '../layout.module';
import {PaginatorModule} from 'primeng/paginator';


@NgModule({
  declarations: [CoursefilmsComponent, CourseArticlesComponent],
  imports: [
    CommonModule,
    CourseslistRoutingModule,
    ButtonModule,
    LayoutModule,
    PaginatorModule
  ]
})
export class CourseslistModule { }
