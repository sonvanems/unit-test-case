import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registerForm: FormGroup;
  submitted: boolean = false;
  title: string = 'Registration Form';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      zipcode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    console.log( this.registerForm.value );

  }

}
