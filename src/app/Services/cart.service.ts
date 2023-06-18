import { Injectable } from '@angular/core';
import { IProduct, quantity } from '../Models/i-produc';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cartItemList:IProduct[]=[];
  Quantity:quantity[]=[]
  AddProducts(cartItem:any):void{
    //console.log(this.cartItemList.length);

    if(this.cartItemList.includes(cartItem)){
      this.Quantity.forEach((el)=>{
        if(el.id == cartItem.id){
          el.quantity++
        }
      });
    } else{
      this.cartItemList.push(cartItem);
      let item = {
         id:cartItem.id,
         quantity:1
      }
      this.Quantity.push(item);
    }

  }
}
