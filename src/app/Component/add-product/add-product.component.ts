import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory, IProduct } from 'src/app/Models/i-produc';
import { AddProductService } from 'src/app/Services/add-product.service';
import { ProducsFromApiService } from 'src/app/Services/producs-from-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  constructor(private catFromApi:ProducsFromApiService , private addPro:AddProductService ,private router:Router){}


  categoryList:ICategory[]=[]
  product: IProduct = {} as IProduct;

  ngOnInit(): void {
    this.catFromApi.getAllCateogories().subscribe({
      next:(data)=>{
        this.categoryList=data;

      },
      error:(err)=>{
        console.log(err);

      }
    })
}

 addProduct(){

  // let data ={
  //   ...v.value, price:parseInt(v.value.price) , quantity :parseInt(v.value.quantity) , careogry :parseInt(v.value.careogry)
  // }
  console.log(this.product);
  this.addPro.addProduct(this.product).subscribe({
    next: (user1) => {
      this.router.navigate(["/Products"]);
      console.log(user1);
    },
    error: (error) => {
      console.log(error);
    },
  });
 }
}
