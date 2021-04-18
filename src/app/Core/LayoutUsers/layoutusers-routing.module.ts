import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboardUser/dashboard.component';
import {TransactionsComponent} from './Financial/transactions/transactions.component';
import {UserAccountComponent} from './Account-Settings/user-account/user-account.component';
import {MySalesComponent} from './my-sales/my-sales.component';
import {MyPurchasesComponent} from './my-purchases/my-purchases.component';
import {MyProductsComponent} from './my-products/my-products.component';
import {MyCoursesComponent} from './my-courses/my-courses.component';
import {SubscriberAffairsComponent} from './system/subscriber-affairs/subscriber-affairs.component';
import {SupportTicketComponent} from './system/support-ticket/support-ticket.component';
import {ReportsComponent} from './Financial/reports/reports.component';
import {CounteruserComponent} from './counteruser/counteruser.component';
import {UserSettingComponent} from './user-setting/user-setting.component';
import {CourseComponent} from './course/course.component';
import {BankAccountComponent} from './Account-Settings/bank-account/bank-account.component';
import {MastercourseComponent} from './mastercourse/mastercourse.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[{
      path:'Counteruser' ,
      component:CounteruserComponent
    }]
  },
  {
    path: '',
    component: DashboardComponent,
    children:[{
      path:'transation' ,
      component:TransactionsComponent
    }]

  },
  {
    path: '',
    component: DashboardComponent,
    children:[{
      path: 'sales',
      component: MySalesComponent
    }]
  },
  {
    path: '',
    component:DashboardComponent,
    children:[{
      path:'Purchases',
      component: MyPurchasesComponent
    }]
  },
  {
    path: '',
    component:DashboardComponent,
    children:[{
      path: 'Products',
      component: MyProductsComponent,
    }]
  },
  {
    path: '',
    component:DashboardComponent,
    children:[{
      path: 'Courses',
      component: MyCoursesComponent
    }]
  },
  {
    path: '',
    component:DashboardComponent,
    children:[{
      path: 'SubscriberAffairs',
      component: SubscriberAffairsComponent
    }]
  },
  {
    path: '',
    component:DashboardComponent,
    children:[{
      path: 'SupportTicket',
      component: SupportTicketComponent
    }]
  },
  {
    path: '',
    component:DashboardComponent,
    children:[{
      path: 'Reports',
      component: ReportsComponent
    }]
  },
  {
    path: '',
    component:DashboardComponent,
    children:[{
      path: 'Counteruser',
      component: CounteruserComponent
    }]
  },
  {
    path: '',
    component:DashboardComponent,
    children:[{
      path: 'UserSetting',
      component: UserSettingComponent
    }]
  },
  {
    path:'',
    component:DashboardComponent,
    children:[{
      path: 'course',
      component: CourseComponent
    }]
  },
  {
    path:'',
    component:DashboardComponent,
    children:[{
      path: 'accountBank',
      component: BankAccountComponent
    }]
  },
  {
    path: '',
    component: DashboardComponent,
    children:[{
      path: 'mastercours',
      component: MastercourseComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutUsersRoutingModule {
}
