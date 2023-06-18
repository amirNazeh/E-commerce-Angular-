import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes=[

  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component: LoginComponent,title:'Login'},
  {path:'singIn',component: SignInComponent,title:'sinIn'},
  {path:'profile',component: ViewProfileComponent,title:'Profile'},
  {path:'EditProfile',component: EditProfileComponent,title:'Edit Profile'},



]

@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    LoginComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
