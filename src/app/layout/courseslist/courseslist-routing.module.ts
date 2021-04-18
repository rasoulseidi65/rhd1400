import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursefilmsComponent} from './coursefilms/coursefilms.component';
import {CourseArticlesComponent} from './course-articles/course-articles.component';


const routes: Routes = [
  {
    path:'films' , component:CoursefilmsComponent
  },
  {
    path:'articles' , component:CourseArticlesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseslistRoutingModule { }
