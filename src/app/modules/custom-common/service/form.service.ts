import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  public collectErrors(formGroup: FormGroup,errors=new Map<string, string>() ):Map<string,string> {
    Object.keys(formGroup.controls).forEach((controlName) => {
      const control = formGroup.get(controlName);
      if (control instanceof FormGroup) {
        this.collectErrors(control, errors);
      } else if (control?.errors) {
        for (const errorKey in control.errors) {
          if (control.errors.hasOwnProperty(errorKey)) {
            // Customize error messages based on errorKey if needed
            errors.set(controlName,errorKey);
          }
        }
      }
    });
    return errors;
  }
}
