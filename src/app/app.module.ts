import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { CategorySliderComponent } from './category-slider/category-slider.component';
import { SearchPipe } from './search.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { CashOrderComponent } from './cash-order/cash-order.component';
import { ToastrModule } from 'ngx-toastr';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    CartComponent,
    CategoriesComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NotfoundComponent,
    RegisterComponent,
    ProductsComponent,
    ProductDetailsComponent,
    MainSliderComponent,
    CategorySliderComponent,
    SearchPipe,
    CheckoutComponent,
    AllOrdersComponent,
    CashOrderComponent,
    SubCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot({
      
    }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private _ProductsService:ProductsService){
    this._ProductsService.footer.emit()
  }
}
