export interface IProduct {
  id:number;
  name:string
  quantity:number
  price:number
  image:string
  careogry:number
  discount:number
  details?:string;
}

export interface ICategory {
  id:number;
  name:string
}

export interface quantity{
  id:number;
  quantity:number;
}
