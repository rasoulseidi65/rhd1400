import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {IndexComponent} from './index/index.component';
import {DetailsComponent} from '../details/details.component';
import {CartComponent} from './cart/cart.component';
import {ContentAllComponent} from './film/hottest-content/content-all/content-all.component';
import {QuestionsArticalComponent} from './film/hottest-content/questions-artical/questions-artical.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./content/detail-film.module').then(m => m.DetailFilmModule)
  },
  {
    path: 'detailArticle/:id',
    loadChildren: () => import('./article/detailarticle/detailarticle.module').then(m => m.DetailarticleModule)
  },
  {
    path: 'content-all',
    component: ContentAllComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'questionDettail',
    component: QuestionsArticalComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
