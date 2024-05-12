import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _HttpClient: HttpClient) { }


  getcategories(): Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
  }
  

// getAllSubCategories():Observable<any>{
//   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/subcategories`)
// }


//   getAllSubCategoriesOnCategory(categoryId:string): Observable<any> {
//     return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/
//     ${categoryId}/subcategories`)
//   }

getSpecificCategory(categoryId:string): Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${categoryId}`)

}

// getSpecificSubCategory(categoryId:string): Observable<any>{
//   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/subcategories/${categoryId}`)
// }

}
