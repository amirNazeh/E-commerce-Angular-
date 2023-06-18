import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SignInService } from '../Services/sign-in.service';

export const userGuard: CanActivateFn = (route, state) => {
  const authService = inject(SignInService);
  const router = inject(Router);

  if(authService.userStatus){
    return true;
  }
  else{
    alert('Please Login First');
    router.navigate(['/user/singIn']);
    return false;
  }

};
