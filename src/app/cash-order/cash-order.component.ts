
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cash-order',
  templateUrl: './cash-order.component.html',
  styleUrls: ['./cash-order.component.css']
})
export class CashOrderComponent {

  constructor(private _CartService: CartService, private _ActivatedRoute: ActivatedRoute, private _Router: Router) { }

  isLodding: boolean = false;

  cartId: any;

  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-z0-9]{5,20}$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-z]{3,15}$/)]),
  })


  handleSubmit(shippingAddress: FormGroup) {
    this.isLodding = true
    console.log(shippingAddress.value)


    this._ActivatedRoute.paramMap.subscribe(
      (params) => {
        console.log(params.get('cartId'))
        this.cartId = params.get('cartId')
      })



    this._CartService.CreateCashOrder(shippingAddress.value, this.cartId).subscribe({
      next: (response) => {
        console.log(response)
        this._Router.navigate(['/allorders'])
        this._CartService.numberOFCartItems.next(0)
        this.isLodding = false
      },
      error: (err) => {
        console.log(err)
        this.isLodding = false
      }
    })

  }
}
