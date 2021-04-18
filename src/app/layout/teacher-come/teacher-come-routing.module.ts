import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeacherpageComponent} from './teacherpage/teacherpage.component';


const routes: Routes = [
  {
    path:'' , component:TeacherpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherComeRoutingModule { }
