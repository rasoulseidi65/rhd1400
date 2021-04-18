import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth/auth.guard';



const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
    data: { title: 'home', breadcrumb: 'home'}
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'Courses',
    loadChildren: () => import('./layout/courseslist/courseslist.module').then(m => m.CourseslistModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./layout/suport/suport.module').then(m => m.SuportModule)
  },
  {
    path: 'teacher',
    loadChildren: () => import('./layout/teacher-come/teacher-come.module').then(m => m.TeacherComeModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)
  },
  // {
  //   path: 'detailArticle',
  //   loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
  // },
  {
    path: 'admin/panel',
    loadChildren: () => import('./Core/LayoutAdmin/layout-admin.module').then(m => m.LayoutAdminModule),
    // canActivate:[AuthGuard]
  },
  {
    path: 'user/panel',
    loadChildren: () => import('./Core/LayoutUsers/layoutusers.module').then(m => m.LayoutusersModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import('./error404/error404.module').then(m => m.Error404Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
