import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailarticleRoutingModule } from './detailarticle-routing.module';
import { DetailarticleComponent } from './detailarticle.component';
import {LayoutModule} from '../../layout.module';
import {ContentBodyComponent} from './content-body/content-body.component';
import {ContentArchiveComponent} from './content-archive/content-archive.component';
import {ContentCommentsComponent} from './content-comments/content-comments.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [DetailarticleComponent, ContentBodyComponent, ContentArchiveComponent, ContentCommentsComponent,],
  imports: [
    CommonModule,
    DetailarticleRoutingModule,
    LayoutModule,
    ReactiveFormsModule
  ]
})
export class DetailarticleModule { }
