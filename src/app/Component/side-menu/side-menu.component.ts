import { Component } from '@angular/core';
import { Store } from 'src/app/Models/store';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  store:Store=new Store("Souq" , "assets/images/logo.jpg" , ["clothes" , "shoes" ,"accessotices"])
  ClientName:string ="Amir"
   sayHello(){
       return `Welcome ${this.ClientName}`;
   }
}
