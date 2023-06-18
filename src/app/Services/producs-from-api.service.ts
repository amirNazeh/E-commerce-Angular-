import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ICategory, IProduct } from '../Models/i-produc';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProducsFromApiService {

  constructor(private httpClient:HttpClient  ) { }

  getAllCateogories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(`${environment.APIURL}/catagory`);
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/product`);
    console.log("error");

  }

 getProductsByCategoryID(catID:number): Observable<IProduct[]> {
  console.log(catID);

    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/product?careogry=${catID}`);

 }

 getProductByID(pID:number) : Observable<IProduct> {
  console.log(typeof pID);

  return this.httpClient.get<IProduct>(
    `${environment.APIURL}/product/${pID}`
  );
}
}
