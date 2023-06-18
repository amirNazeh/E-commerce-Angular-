import { Component, OnInit } from '@angular/core';
import { ICategory, IProduct, quantity } from 'src/app/Models/i-produc';
import { ProducsFromApiService } from 'src/app/Services/producs-from-api.service';

@Component({
  selector: 'app-product-parent',
  templateUrl: './product-parent.component.html',
  styleUrls: ['./product-parent.component.scss']
})
export class ProductParentComponent implements OnInit{
  constructor(private catFromApi:ProducsFromApiService){}

  listFilter:number = 0
  categoryFilter:number = 0



  categoryList:ICategory[]=[]


  ngOnInit(): void {
    this.catFromApi.getAllCateogories().subscribe({
      next:(data)=>{
        this.categoryList=data;
      console.log(data);

      },
      error:(err)=>{
        console.log(err);

      }
    })
  }






}


