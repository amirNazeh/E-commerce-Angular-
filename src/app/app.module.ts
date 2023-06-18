import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { ProductsComponent } from './Component/products/products.component';
import { FooterComponent } from './Component/footer/footer.component';
import { SideMenuComponent } from './Component/side-menu/side-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImgStyleDirective } from './Directives/img-style.directive';
import { FormatsPipe } from './pipes/formats.pipe';
import { ProductParentComponent } from './Component/product-parent/product-parent.component';
import { HomeComponent } from './Component/home/home.component';
import { NotFoundPageComponent } from './Component/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { CartComponent } from './Component/cart/cart.component';
import{HttpClientModule} from '@angular/common/http';
import { ObservablesComponent } from './Component/observables/observables.component';
import { AddProductComponent } from './Component/add-product/add-product.component';
import { EditDeleteProductComponent } from './Component/edit-delete-product/edit-delete-product.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    SideMenuComponent,
    ImgStyleDirective,
    FormatsPipe,
    ProductParentComponent,
    HomeComponent,
    NotFoundPageComponent,
    ProductDetailsComponent,
    CartComponent,
    ObservablesComponent,
    AddProductComponent,
    EditDeleteProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
