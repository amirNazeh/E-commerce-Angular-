import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/i-produc';
import { AddProductService } from 'src/app/Services/add-product.service';
import { ProducsFromApiService } from 'src/app/Services/producs-from-api.service';
import { ProducsService } from 'src/app/Services/producs.service';

@Component({
  selector: 'app-edit-delete-product',
  templateUrl: './edit-delete-product.component.html',
  styleUrls: ['./edit-delete-product.component.scss']
})
export class EditDeleteProductComponent {
  prdID:number = 0
  product: IProduct = {} as IProduct;


  constructor(private prdService:ProducsService ,
    private activatedRoute: ActivatedRoute,
     private productapiService:ProducsFromApiService,
     private prod:AddProductService,
    private router : Router
     ){}
  ngOnInit(): void {


   this.activatedRoute.paramMap.subscribe((params) => {
     this.prdID = params.get('productID')
       ? Number(params.get('productID'))
       : 0;

      let resultOfFoundedPrd = this.productapiService.getProductByID(this.prdID);
     if (resultOfFoundedPrd) {
       this.productapiService.getProductByID(this.prdID).subscribe((data) => {
         this.product = data;
       });
     } else {
       alert('Product not found');
     }
    });

   }

   editProduct(){
    console.log(this.product);
    this.prod.EditProduct(this.product , this.product.id).subscribe({
      next: (user1) => {
        this.router.navigate(["/Products"]);
        console.log(user1);
        console.log("edeted");
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deleteProduct(){
    alert('Are you soure you want delete');
    this.prod.DeleteProduct(this.product.id).subscribe({
      next: (user1) => {
        this.router.navigate(["/Products"]);
        console.log(user1);
        console.log("deleted");

      },
      error: (error) => {
        console.log(error);
      },
    });
   }

}
