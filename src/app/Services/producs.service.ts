import { Injectable } from '@angular/core';
import { ICategory, IProduct } from '../Models/i-produc';

@Injectable({
  providedIn: 'root'
})
export class ProducsService {

  ProductList:IProduct[]=[]
  careogryList:ICategory[]=[]
  constructor(){
    this.ProductList=[
      {id:1 ,
         name:"T-shirt" ,
          quantity:5 ,
           price: 200 ,
           image:"../../assets/images/t-shirt.jpg" ,
          careogry:1,
          discount:20
      },
      {
        id:2,
         name:"T-shirt" ,
         quantity:1 ,
          price: 100 ,
           image:"https://bonobos-contentful.imgix.net/1zbm708fksg8/4BlfvMUxv4q68wParY7JrT/f5c2e672feb589cdbf3e74e0adfe25a8/APR-HP-Program-Tile-3-Desktop.jpg?auto=compress%2Cformat&fit=clip&cs=srgb&w=375&q=50&fm=pjpg" ,
           careogry:1,
            discount:30
          },
          {id:3 ,
            name:"Shoes" ,
             quantity:0 ,
              price: 100 ,
              image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4lsflkwxrco-opKmSCbuIGyTgUGAwQPNsnA&usqp=CAU" ,
              careogry:2,
             discount:0
         },
         {id:4 ,
          name:"Shoes" ,
           quantity:2 ,
            price: 200 ,
            image:"https://m.media-amazon.com/images/I/7111YB9chNL._AC_SX500_.jpg" ,
            careogry:2,
           discount:0
       },
       {id:5 ,
        name:"Watch" ,
         quantity:5 ,
          price: 100 ,
          image:"https://m.media-amazon.com/images/I/81KSUCaGIYL._AC_UL320_.jpg" ,
          careogry:3,
         discount:0
     },
     {id:6 ,
      name:"Watch" ,
       quantity:3 ,
        price: 300 ,
        image:"https://m.media-amazon.com/images/I/717iCoio-eL._AC_UL320_.jpg" ,
        careogry:3,
       discount:0
   },

    ]
    this.careogryList=[
      {id:1, name:"Clothes"},
      {id:2, name:"Shoes"},
      {id:3, name:"Accessorices"}
    ]
  }
  getAllproduct():IProduct[]{
   return this.ProductList
  }

  performFilter(filterBy: number): IProduct[] {
    if(filterBy==0){
      return this.getAllproduct()
    // return  this.filteredProducts = this.ProductList;
    } else{
      return  this.ProductList.filter((product: IProduct) =>
      product.price == filterBy)
    }
  }

  getProductByID(prodId: number): IProduct | undefined {
    return this.ProductList.find((prd) => prd.id == prodId);
  }

  getIDSOfProducts():number[]{
    return this.ProductList.map(prd => prd.id);
  }

  getProductsByCatID(prodId: number): IProduct | undefined {
    return this.ProductList.find((prd) => prd.careogry == prodId);
  }

}
