

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  constructor(private _ProductsService: ProductsService, private _CartService: CartService ,private _ToastrService:ToastrService) {

  }

  isSpin: boolean = false;
  searchTerm: string = ''
  products: Product[] = []
  isLoading: boolean = false;
  ngOnInit(): void {
    this.isSpin = true
    this._ProductsService.getProducts().subscribe({
      next: (response) => {
        this.products = response.data
        this._ProductsService.footer.emit()
        this.isSpin = false
      }
    })


  }

  addToCart(productId: string) {
    this.isLoading = true;
    this._CartService.addToCart(productId).subscribe({
      next: (response) => {
        console.log(response)
        this._CartService.numberOFCartItems.next(response.numOfCartItems)
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err)
        this.isLoading = false;
      }

    })
  }


  showSuccess(message: string, title: string) {
    this._ToastrService.success(message, title);
  }
}
