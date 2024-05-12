import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../cart'
import { BehaviorSubject } from 'rxjs';
import { ToastrService} from 'ngx-toastr'
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private _CartService: CartService,private _ToastrService:ToastrService,private _ProductsService:ProductsService) { }

  cartDetails: Cart | undefined;
  cartDetailsProducts: Cart[] = []
  isLodding: boolean = false;
  islodder: boolean = false;
  isSpinner: boolean = false;
  cartDelete: any;
  isSpin: boolean = false;
  ngOnInit(): void {
    this.isSpin = true
    this._CartService.getLoggedUserCart().subscribe({
      next: (response) => {
        console.log(response)
        this.cartDetails = response.data
        this.cartDetailsProducts = response.data.products
        console.log(response.data.products)
        this._ProductsService.footer.emit()
        this.isSpin = false
      },
      error: (err) => {
         console.log(err)
         document.getElementById('cartDelete')?.classList.replace("d-none", "d-block")
         this.isSpin = false
      }
    })
  }

  removeItem(productId: string) {
    this.isLodding = true;
    this._CartService.removeCartItem(productId).subscribe({
      next: (response) => {



        
        console.log(response.data.products)
        this.cartDetails = response.data
        this.cartDetailsProducts = response.data.products
        this._CartService.numberOFCartItems.next(response.numOfCartItems)
        this.isLodding = false;
      },
      error: (err) => {
        console.log(err)
        this.isLodding = false;
      }
    })
  }


  updateItemCount(productId: string, count: number) {
    this.islodder = true;
    this._CartService.updateItemCount(productId, count).subscribe({
      next: (response) => {
        console.log(response.data.products)
        this.cartDetails = response.data
        this.cartDetailsProducts = response.data.products
        this.islodder = false;
      },
      error: (err) => {
        console.log(err)
        this.islodder = false;
      }

    })
  }



  removeAllCart() {
    this.isSpinner = true;
    this._CartService.removeAllCart().subscribe({
      next: (response) => {
        console.log(response.data)
        this.cartDetails = response.data
        this.cartDetailsProducts = response?.data?.products
        this._CartService.numberOFCartItems.next(0)
        document.getElementById('cartDelete')?.classList.replace("d-none", "d-block")
        this.isSpinner = false;
      },
      error: (err) => {
        console.log(err);
        this.isSpinner = false;
      }
    })
  }


  clickOnlinePayment() {
    document.getElementById('btn1')?.classList.remove("d-none")
    document.getElementById('btn2')?.classList.replace("d-block", "d-none")

  }

  clickOrderNow() {
    document.getElementById('btn1')?.classList.add("d-none")
    document.getElementById('btn2')?.classList.replace("d-none", "d-block")
  }




  showError(message: string, title: string) {
    this._ToastrService.error(message,  title);
  }
 
  showSuccess(message: string, title: string) {
    this._ToastrService.success(message, title);
  }

}
