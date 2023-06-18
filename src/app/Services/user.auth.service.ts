import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../Models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  http={};
  constructor(private httpclient: HttpClient) {
    this.http={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  signUpUser(newUser:User):Observable<User>{
    return this.httpclient.post<User>(`${environment.APIURL}/users`,JSON.stringify(newUser),this.http);
  }



}
