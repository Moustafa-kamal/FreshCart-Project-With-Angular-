import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { CashOrderComponent } from './cash-order/cash-order.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { ProductsService } from './products.service';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', canActivate:[AuthGuard] ,component:HomeComponent},
  {path:'products', canActivate:[AuthGuard]  ,component:ProductsComponent},
  {path:'categories' , canActivate:[AuthGuard] ,component:CategoriesComponent},
  {path:'cart' , canActivate:[AuthGuard] ,component:CartComponent},
  {path:'checkout/:cartId' , canActivate:[AuthGuard] ,component:CheckoutComponent},
  {path:'cashorder/:cartId' , canActivate:[AuthGuard] ,component:CashOrderComponent},
  {path:'brands' , canActivate:[AuthGuard] ,component:BrandsComponent},
  {path:'productdetails/:id' , canActivate:[AuthGuard] ,component:ProductDetailsComponent},
  {path:'allorders' , canActivate:[AuthGuard] ,component:AllOrdersComponent},
  {path:'subcategories/:categoryId' , canActivate:[AuthGuard] ,component:SubCategoriesComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // flag: boolean = false;
  constructor(private _ProductsService:ProductsService){

    // this._ProductsService.footer.subscribe(() => {
    //   this.flag = true
    // })
    this._ProductsService.footer.emit()
  }
 }
