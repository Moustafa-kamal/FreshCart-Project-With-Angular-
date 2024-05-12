import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart.service';
import { ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private _ProductsService: ProductsService, private _ActivatedRoute: ActivatedRoute, private _CartService: CartService , private _ToastrService:ToastrService) { }

  productId: any;
  productDetails?: Product;
  isLoading: boolean = false;
  isSpin: boolean = false;
  ngOnInit(): void {
    this.isSpin = true
    this._ActivatedRoute.paramMap.subscribe(
      (params) => {
        console.log(params.get('id'))
        this.productId = params.get('id')
      })
    this._ProductsService.getproductDetails(this.productId).subscribe({
      next: (reponse) => {
        console.log(reponse.data)
        this.productDetails = reponse.data
        this._ProductsService.footer.emit()
        this.isSpin = false
      }

    })
  }



  addToCart(productId: string) {
    this.isLoading = true;
    this._CartService.addToCart(productId).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log(response)
        this._CartService.numberOFCartItems.next(response.numOfCartItems)
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err)
      }

    })
  }


  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    smartSpeed: 10,
    autoplaySpeed: 200,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      // 400: {
      //   items: 1
      // },
      // 740: {
      //   items: 1
      // },
      // 940: {
      //   items: 1
      // }
    },
    nav: false
  }


  showSuccess(message: string, title: string) {
    this._ToastrService.success(message, title);
  }
}
