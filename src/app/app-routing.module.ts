import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Component/products/products.component';
import { HomeComponent } from './Component/home/home.component';
import { NotFoundPageComponent } from './Component/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { ProductParentComponent } from './Component/product-parent/product-parent.component';
import { CartComponent } from './Component/cart/cart.component';
import { AddProductComponent } from './Component/add-product/add-product.component';
import { userGuard } from './Guards/user.guard';
import { EditDeleteProductComponent } from './Component/edit-delete-product/edit-delete-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent, title: 'Home Page' },
  { path: 'Products', component: ProductParentComponent, title: 'Products Page' },
  { path: 'prd/:productID', component: ProductDetailsComponent, title: 'Product Details Page' },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: 'addProduct', component: AddProductComponent, title: 'Add Product' , canActivate:[userGuard]},
  { path: 'edite/:productID', component: EditDeleteProductComponent, title: 'Edite Page' },
  {
    path: 'user',
    loadChildren: () => import('src/app/Component/User/user.module').then(m => m.UserModule)
  },
  { path: '**', component: NotFoundPageComponent, title: 'Not Found Page' }, // wild card path (not found)

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
