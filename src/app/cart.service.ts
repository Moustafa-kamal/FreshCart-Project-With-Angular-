import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,BehaviorSubject, retry } from 'rxjs';
import { Headers } from './headers';
import { ShippingAdress } from './shipping-adress'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  numberOFCartItems = new BehaviorSubject(0)

  constructor(private _HttpClient: HttpClient) {

    this.getLoggedUserCart().subscribe({
      next: (response) =>{
         console.log(response)
         this.numberOFCartItems.next(response.numOfCartItems)
        },
      error: (err) => console.log(err)

    })

  }

  headers: any = { token: localStorage.getItem('userToken') }


  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`, { productId: productId }, { headers: this.headers })
  }


  getLoggedUserCart(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,
      { headers: this.headers })
  }


  removeCartItem(productId: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, { headers: this.headers })
  }


  updateItemCount(productId: string, count: number): Observable<any> {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, { count: count }, { headers: this.headers })
  }


  removeAllCart(): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`, { headers: this.headers })
  }


  onlinePayment(shippingAddress: ShippingAdress, cartId: string): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      { shippingAddress: shippingAddress }, { headers: this.headers })
  }




  CreateCashOrder(shippingAddress: ShippingAdress,cartId: string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, { shippingAddress: shippingAddress }, { headers: this.headers })
  }



  getAllOrders():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/`)
  }


  
  


}