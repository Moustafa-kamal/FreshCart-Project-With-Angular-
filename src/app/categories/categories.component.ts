import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Category } from '../category'
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoriesItem: Category[] = []
  isSpin: boolean = false;

  constructor(private _CategoriesService: CategoriesService , private _ProductsService:ProductsService) { }

  ngOnInit(): void {
    this.isSpin=true
    this._CategoriesService.getcategories().subscribe({
      next: (response) => {
        console.log(response.data)
        this.categoriesItem = response.data
        this._ProductsService.footer.emit()
        this.isSpin=false
      },
      error: (err) => {
        console.log(err)
        this.isSpin=false
      }
    })


  }
}
