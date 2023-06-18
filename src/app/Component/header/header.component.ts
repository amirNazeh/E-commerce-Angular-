import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/Services/sign-in.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  userLogCheck:boolean;
  constructor(private signIn:SignInService , private router: Router){
    this.userLogCheck=this.signIn.userStatus;


  }
    ngOnInit(): void {


      this.signIn.userStatusChangeWithObs().subscribe(status=>{
        this.userLogCheck=status;
        console.log(this.userLogCheck);
      })
}

logOutFunc(){
  this.signIn.logout();
  this.userLogCheck=this.signIn.userStatus;
  this.navigateToSignIn ()
}

navigateToSignIn (){
  this.router.navigate(['user/singIn']);
}


}
