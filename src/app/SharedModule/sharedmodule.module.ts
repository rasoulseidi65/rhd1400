import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrimNgComponentModule} from './prim-ng-component.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimNgComponentModule
  ],
  exports:[PrimNgComponentModule]
})
export class SharedmoduleModule { }
