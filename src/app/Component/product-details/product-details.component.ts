import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/i-produc';
import { ProducsFromApiService } from 'src/app/Services/producs-from-api.service';
import { ProducsService } from 'src/app/Services/producs.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit,OnChanges {
prdID:number = 0
product : IProduct | undefined = undefined;
productIDSArr: number[] = [];



returnedCurrentIndex:number = 0;
constructor(private prdService:ProducsService ,
   private activatedRoute: ActivatedRoute,
    private router:Router,
    private productapiService:ProducsFromApiService
    ){

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.prevFunc();
  }
   ngOnDestroy(): void {
   this.product
   }
  ngOnInit(): void {
   // this.prdID= (this.activatedRoute.snapshot.paramMap.get('productID'))?Number(this.activatedRoute.snapshot.paramMap.get('productID')):0;
  //  let resultOfFoundedPrd = this.prdService.getProductByID(this.prdID);
  //  this.product= resultOfFoundedPrd
  //  this.productIDSArr = this.prdService.getIDSOfProducts();
  //  console.log(this.productIDSArr);

  this.activatedRoute.paramMap.subscribe((params) => {
    this.prdID = params.get('productID')
      ? Number(params.get('productID'))
      : 0;

    // let resultOfFoundedPrd = this.prdService.getProductByID(this.prdID);
    // if (resultOfFoundedPrd) {
    //   this.product = resultOfFoundedPrd;
    // } else {
    //   alert('Product not found');
    // }

     let resultOfFoundedPrd = this.prdService.getProductByID(this.prdID);
    if (resultOfFoundedPrd) {
      this.productapiService.getProductByID(this.prdID).subscribe((data) => {
        this.product = data;
      });
    } else {
      alert('Product not found');
    }
   });

   this.productIDSArr = this.prdService.getIDSOfProducts();
     console.log(this.productIDSArr);







  }


BackToHome() {
  this.router.navigate(['Products']);
}

prevFunc() {

  this.returnedCurrentIndex= this.productIDSArr.indexOf(this.prdID);
  this.router.navigate(["/prd",this.productIDSArr[--this.returnedCurrentIndex]]);

}
nextFunc() {
  this.returnedCurrentIndex= this.productIDSArr.indexOf(this.prdID);
  this.router.navigate(["/prd",this.productIDSArr[++this.returnedCurrentIndex]]);
}
}
