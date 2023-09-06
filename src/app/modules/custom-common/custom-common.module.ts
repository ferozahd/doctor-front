import { NgModule } from '@angular/core';

import { FormService } from './service/form.service';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule
  ],

  exports: [

  ],
  providers:[
    FormService
  ]
})
export class CustomCommonModule { }
