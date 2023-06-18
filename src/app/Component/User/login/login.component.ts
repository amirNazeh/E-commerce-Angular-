import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserAuthService } from 'src/app/Services/user.auth.service';
import {  ValidationErrors, ValidatorFn } from '@angular/forms';
function passwordMatcher(
  pass: AbstractControl
): { [key: string]: boolean } | null {
  const passwordControl = pass.get('password');
  const confirmPasswordControl = pass.get('confirmPassword');
  if (passwordControl?.pristine || confirmPasswordControl?.pristine) {
    return null;
  }
  if (passwordControl?.value === confirmPasswordControl?.value) {
    return null;
  }
  return {
    match: true,
  };
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userForm: FormGroup;
  passwordMessage: string = '';
  private vaildationMassge = {
    required: 'Please enter your password',
    email: 'Please enter valid password',
  };
  // profileForm = new FormGroup(
  //   {
  //     password: new FormControl('', [Validators.required]),
  //     confirmPassword: new FormControl('', [Validators.required]),
  //   },
  //   [CustomValidators.MatchValidator('password', 'confirmPassword')]
  // );


  profileForm = new FormGroup(
    {
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    [CustomValidators.MatchValidator('password', 'confirmPassword')]
  );

  get passwordMatchError() {
    return (
      this.profileForm.getError('mismatch') &&
      this.profileForm.get('confirmPassword')?.touched
    );
  }
  constructor(private forms: FormBuilder  ,private userSer: UserAuthService, private router: Router,  private formBuider: FormBuilder) {

    // this.userForm=new FormGroup(
    //   {
    //     firstName:new FormControl('',[Validators.required, Validators.minLength(3)]),
    //     lastName:new FormControl('',[Validators.required]),
    //     email:new FormControl('',[Validators.required]),

    //   }
    // );



    this.userForm = this.forms.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required , Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.minLength(12)]],
     city: ['', Validators.required] ,
     postalCode: ['', Validators.required] ,
     street: ['', Validators.required] ,
     passwordGroup: this.formBuider.group(
      {
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validator: passwordMatcher }
    ),
        //[CustomValidators.MathchValidator("password","confirmPassword")]
      //),
      mobileNumber2:this.forms.array([]),
    });
  }
  get fullName() {
    return this.userForm.get('fullName');
  }
  get email() {
    return this.userForm.get('email');
  }
  get mobileNumber() {
    return this.userForm.get('mobileNumber');
  }
  get mobileNumber2() {
    return this.userForm.get(' mobileNumber2');
  }
  get city() {
    return this.userForm.get('city');
  }
  get postalCode() {
    return this.userForm.get('postalCode');
  }
  get street() {
    return this.userForm.get('street');
  }




  setMessage(pass: AbstractControl): void {
    this.passwordMessage = '';
    if ((pass.touched || pass.dirty) && pass.errors) {
      this.passwordMessage = this.vaildationMassge.required;
      console.log(this.passwordMessage);
    }
  }

  get numbers(): FormArray {
    return this.userForm.get('mobileNumber2') as FormArray;
  }

  newNumber2(): FormGroup {
    return this.forms.group({
      mobileNumber: ['', [Validators.required, Validators.minLength(12)]],
    });
  }
  addNumber2() {

    // error here only add () to newAddress
    this.numbers.push(this.newNumber2());
  }
  removeNumber(num: number) {
    this.numbers.removeAt(num);
    console.log(num);
  }

  user: User = {} as User;

  addUser() {


    this.userSer.signUpUser(this.user).subscribe({
      next: (user1) => {
        this.router.navigate(['/Products']);
        console.log(user1);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }




}

export class CustomValidators {
  static MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }
}

