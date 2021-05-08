import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';


import {CommentComponent} from './comment/comment.component';
import {FilmComponent} from './film/film.component';

import {HeaderComponent} from './header/header.component';
import {IndexComponent} from './index/index.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {CenterMenuComponent} from './center-menu/center-menu.component';
import {MenuComponent} from './menu/menu.component';
import {FooterComponent} from './footer/footer.component';
import {GalleriaModule} from 'primeng/galleria';
import {
  AccordionModule,
  ButtonModule,
  CardModule, DialogModule,
  InputTextareaModule, InputTextModule,
  OrderListModule, PaginatorModule, PanelMenuModule,
  PanelModule,
  SharedModule, SidebarModule
} from 'primeng/primeng';
import {ArticleComponent} from './article/article.component';
import {CartComponent} from './cart/cart.component';
import {MatStepperModule} from '@angular/material/stepper';
import {ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CooperationComponent} from './cooperation/cooperation.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
// import {AllCantentComponent} from './film/all-cantent/all-cantent.component';
import {HottestContentComponent} from './film/hottest-content/hottest-content.component';
import {MostDownloadsComponent} from './film/most-downloads/most-downloads.component';
import {MostPopularContentComponent} from './film/most-popular-content/most-popular-content.component';
import {ContentAllComponent} from './film/hottest-content/content-all/content-all.component';
import {MatButtonModule, MatCardModule, MatDividerModule, MatGridListModule, MatIconModule, MatListModule} from '@angular/material';
import {AllCantentComponent} from './film/all-cantent/all-cantent.component';
import {QuestionsArticalComponent} from './film/hottest-content/questions-artical/questions-artical.component';
import {DeviceDetectorService} from 'ngx-device-detector';
import {CallBackComponent} from './call-back/call-back.component';
import { SloganComponent } from './slogan/slogan.component';
import { Advertising1Component } from './advertising1/advertising1.component';
import { Advertising2Component } from './advertising2/advertising2.component';
import { Advertising3Component } from './advertising3/advertising3.component';



@NgModule({
  declarations: [IndexComponent, HeaderComponent, CommentComponent
    , FilmComponent, ArticleComponent, TopMenuComponent,
    CenterMenuComponent, MenuComponent, FooterComponent,
    CartComponent, CooperationComponent, HottestContentComponent,
    MostDownloadsComponent, MostPopularContentComponent,
    ContentAllComponent, AllCantentComponent, QuestionsArticalComponent, CallBackComponent, SloganComponent, Advertising1Component, Advertising2Component, Advertising3Component],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    GalleriaModule,
    SharedModule,
    ButtonModule,
    CardModule,
    MatStepperModule,
    InputTextareaModule,
    OrderListModule,
    PanelModule,
    ReactiveFormsModule,
    TableModule,
    AccordionModule,
    ToastModule,
    CarouselModule,
    MatGridListModule,
    PaginatorModule,
    InputTextModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    DialogModule,
    SidebarModule,
    PanelMenuModule,


  ],
  exports: [IndexComponent,
    HeaderComponent,
    FilmComponent, ArticleComponent, CommentComponent,
    TopMenuComponent, CenterMenuComponent, MenuComponent, FooterComponent, CallBackComponent],
  providers: [DeviceDetectorService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class LayoutModule {
}
