import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth.component/auth.component';
import { LoginComponents } from './components/login.components/login.components';
import { SignupComponent } from './components/signup.component/signup.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent,

  }, 
  { path: 'login', component: LoginComponents } ,
  {
    path: 'signup', component: SignupComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
