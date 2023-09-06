import { Component, OnInit } from '@angular/core';
import { AuthFormGroup } from '../../model/login.form';
import { FormService } from 'src/app/modules/custom-common/service/form.service';


@Component({
  selector: 'auth-login',
  templateUrl: './login.components.html',
  styleUrls: ['./login.components.scss']
})
export class LoginComponents implements OnInit {

  authFormGroup = new AuthFormGroup();
  formErrors:Map<string,string> =new Map<string,string>([]);

  constructor(
    private formService:FormService
    ){

  }
  ngOnInit(): void {
    console.log("Open")

  }

  loginSubmit(): void {
    this.formErrors= this.formService.collectErrors(this.authFormGroup.login);
    console.log(this.formErrors)
  }


}
