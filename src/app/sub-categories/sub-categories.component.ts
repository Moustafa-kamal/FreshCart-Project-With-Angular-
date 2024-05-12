import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent implements OnInit{

  constructor(private _CategoriesService:CategoriesService , private _ActivatedRoute:ActivatedRoute){}

  CategoryId: any;
  SubCategories:any[]=[]
specificCategory:any
ngOnInit(): void {

this._ActivatedRoute.paramMap.subscribe(
  (params)=>{
    console.log(params.get('categoryId'))
        this.CategoryId = params.get('categoryId')
  }
)



  // this._CategoriesService.getAllSubCategories().subscribe({
  //     next: (response) => {
  //       console.log(response.data)
  //       this.SubCategories=response.data
       
  //     },
  //     error: (err) => console.log(err)
  //   })

  // this._CategoriesService.getproductDetails(this.CategoryId).subscribe({
  //   next: (response) => {
  //     console.log(response)
  //     this.SubCategories=response.data
     
  //   },
  //   error: (err) => console.log(err)
  // })


  // this._CategoriesService.getSpecificSubCategory(this.CategoryId).subscribe({
  //     next: (response) => {
  //       console.log(response)
  //       this.SubCategories=response.data
       
  //     },
  //     error: (err) => console.log(err)
  //   })







  this._CategoriesService.getSpecificCategory(this.CategoryId).subscribe({
    next: (response) => {
      console.log(response.data)
      this.specificCategory=response.data
     
    },
    error: (err) => console.log(err)
  })
  

}


}
