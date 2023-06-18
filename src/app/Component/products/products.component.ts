import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import{ Store} from 'src/app/Models/store'
import{ ICategory, IProduct} from 'src/app/Models/i-produc'
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { ProducsService } from 'src/app/Services/producs.service';
import { Router } from '@angular/router';
import { ProducsFromApiService } from 'src/app/Services/producs-from-api.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnChanges{

  store:Store=new Store("Souq" , "assets/images/logo.jpg" , ["clothes" , "shoes" ,"accessotices"])


  ClientName:string ="Amir"
  formatNum:any =""
   sayHello(){
       return `Thanks for purchasing from our Store ${this.ClientName}`;
   }

   constructor(private productService:ProducsService,
     private router:Router,
     private addToCart:CartService,
    private prdFromApi:ProducsFromApiService){}

  buy(item:IProduct) {

    if(item.quantity>=1){
      item.quantity--
     }

  }

  private _listFilter: number = 0;
  filteredProducts: IProduct[] = [];
  private _categoryFilter:number = 0;
  @Input() get listFilterChild(): number {
    return this._listFilter;
  }
  set listFilterChild(value: number) {
    this._listFilter = value;
    console.log('In setter', value);
    this.filteredProducts = this.productService.performFilter(value)
  }

  ngOnChanges(): void {
    this.listFilterChild;
    this.catFilterChild;
  }

  ngOnInit(): void {
    //this.filteredProducts = this.productService.ProductList;
    this.getAllProducts()

  }


  // @Output() AddedItemEvent:EventEmitter<IProduct[]>=new EventEmitter<IProduct[]>();
  // addCart(item:any){
  // this.AddedItemEvent.emit(item)
  // }

  addTopCart(item:any){
    this.addToCart.AddProducts(item)
  }


  prdDetails(prdID:number){

    this.router.navigate(['/prd',prdID]);
  }


  getAllProducts(){
    this.prdFromApi.getAllProducts().subscribe({
      next:(data)=>{

        this.filteredProducts=data;

      },
      error:(err)=>{
        console.log(err);

      }
    })
  }
  @Input() get catFilterChild(): number {
    return this._categoryFilter;
  }
  set catFilterChild(value: number) {
    this._categoryFilter = value;
    console.log(this._categoryFilter);

    if(value==0){
      this.getAllProducts()
    }else{
      this.prdFromApi.getProductsByCategoryID(value).subscribe((data) =>{
        this.filteredProducts = data

      })
     }
    }

    prdEdite(prdID:number){

      this.router.navigate(['/edite',prdID]);
    }

}










// private _listFilter: number = 0;
//   filteredProducts: IProduct[] = [];

//   get listFilter(): number {
//     return this._listFilter;
//   }
//   set listFilter(value: number) {
//     this._listFilter = value;
//     console.log('In setter', value);


//     this.filteredProducts = this.performFilter(value);
//   }
//   ngOnInit(): void {
//     this.filteredProducts = this.ProductList;
//   }


//   performFilter(filterBy: number): IProduct[] {

//     return this.ProductList.filter((product: IProduct) =>
//       product.careogry.id==filterBy
//     );
//   }


