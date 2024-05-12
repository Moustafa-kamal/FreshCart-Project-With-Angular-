import { HttpClient } from '@angular/common/http';
import { Injectable,Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  @Output() footer =new EventEmitter<any>()
  constructor(private _HttpClient: HttpClient) { }


  getProducts(): Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products')
  }

  getproductDetails(id:string): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

  getcategories(): Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
  }
}
