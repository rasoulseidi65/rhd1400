import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailFilmRoutingModule } from './detail-film-routing.module';
import {ContentArchiveComponent} from './content-archive/content-archive.component';
import {ContentBodyComponent} from './content-body/content-body.component';
import {ContentCommentsComponent} from './content-comments/content-comments.component';
import {ContentComponent} from './content.component';
import {LayoutModule} from '../layout.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {MessageModule} from 'primeng/message';
import {PanelModule} from 'primeng/panel';


@NgModule({
  declarations: [ContentArchiveComponent,ContentBodyComponent,ContentCommentsComponent,ContentComponent],
  imports: [
    CommonModule,
    DetailFilmRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    ButtonModule,
    FormsModule,
    MessageModule,
    PanelModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DetailFilmModule { }
