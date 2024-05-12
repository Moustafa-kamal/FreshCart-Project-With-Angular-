import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  
  constructor(private _CartService: CartService, private _ActivatedRoute: ActivatedRoute , private _ProductsService:ProductsService) { 
    this._ProductsService.footer.emit()
  }

  isLodding: boolean = false;

  cartId: any;

  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-z0-9]{5,20}$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-z]{3,15}$/)]),
  })


  navigateToPage(url: string) {
    window.location.href = url
  }


  handleSubmit(shippingAddress: FormGroup) {
    this.isLodding = true
    console.log(shippingAddress.value)


    this._ActivatedRoute.paramMap.subscribe(
      (params) => {
        console.log(params.get('cartId'))
        this.cartId = params.get('cartId')
      })



    this._CartService.onlinePayment(shippingAddress.value, this.cartId).subscribe({
      next: (response) => {
        console.log(response.session)
        this.navigateToPage(response.session.url)
        this.isLodding = false
      },
      error: (err) => {
        console.log(err)
        this.isLodding = false
      }
    })

  }
}
