import { FormControl, FormGroup, Validators } from "@angular/forms";

export class AuthFormGroup {
    login: FormGroup;

    constructor() {
        this.login = new FormGroup({
            email: new FormControl(undefined, [Validators.required, Validators.minLength(4)]),
            password: new FormControl(undefined,[Validators.required, Validators.minLength(6)]),
        });
    }
}