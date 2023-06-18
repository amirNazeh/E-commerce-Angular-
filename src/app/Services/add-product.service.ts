import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/i-produc';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  http={};
  constructor(private httpclient: HttpClient) {
    this.http={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  addProduct(product:IProduct):Observable<IProduct>{
    console.log(product);

    return this.httpclient.post<IProduct>(`${environment.APIURL}/product`,JSON.stringify(product),this.http);

  }

  EditProduct(product:IProduct , id:number):Observable<IProduct>{

    return this.httpclient.put<IProduct>(`${environment.APIURL}/product/${id}`
    ,JSON.stringify(product),this.http);

  }

  DeleteProduct(id:number){
    return this.httpclient.delete(`${environment.APIURL}/product/${id}`);

  }
}
