import { Component, OnInit } from '@angular/core';
import { IProduct, quantity } from 'src/app/Models/i-produc';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit{
  constructor (private addToCart:CartService){}


  cartItemList:IProduct[]=[];
  Quantity:quantity[]=[]


  ngOnInit(): void {
    this.cartItemList = this.addToCart.cartItemList
    this.Quantity = this.addToCart.Quantity
  }



   quantity(item:IProduct){
    let totalQuantity = 0;
    this.Quantity.forEach((i)=>{
      if(i.id == item.id){
        totalQuantity = i.quantity
      }
    })
     return totalQuantity;
   }


   removeProduct(i:any) {

  if(this.Quantity[i].quantity > 1){

    this.Quantity[i].quantity--
    console.log("a");

  } else if(this.Quantity[i].quantity == 1){

    this.cartItemList.splice(i, 1);
    this.Quantity.splice(i, 1);
    console.log(this.Quantity[i].quantity);

  }
  }





  getTotalPrice(){
    let totalPrice:number = 0
    this.cartItemList.forEach((el)=>{
      this.Quantity.forEach((i)=>{
        if(i.id == el.id){
          totalPrice += i.quantity*el.price
        }
      })
    })
      return totalPrice
  }




}
