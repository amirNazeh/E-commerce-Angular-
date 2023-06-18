import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/Services/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

constructor(private router: Router ,private userAuthser:SignInService){}

user:boolean=false;

  ngOnInit(): void {
    this.user=this.userAuthser.userStatus;

  }

  public password :string =""
  public email :string =""

  loginFunc(){

    this.userAuthser.login(this.email,this.password);

    this.user=this.userAuthser.userStatus;
   this.navigateHome ()
  }


navigateToSignUp (){
  this.router.navigate(['/user/login']);
}

navigateHome (){
  this.router.navigate(['/Products']);
}
}
