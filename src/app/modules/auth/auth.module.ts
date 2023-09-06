import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth.component/auth.component';
import { LoginComponents } from './components/login.components/login.components';
import { SignupComponent } from './components/signup.component/signup.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomCommonModule } from '../custom-common/custom-common.module';



@NgModule({
  declarations: [
    AuthComponent,
    SignupComponent,
    LoginComponents,

  ],
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    CustomCommonModule
  ]
})
export class AuthModule { }
