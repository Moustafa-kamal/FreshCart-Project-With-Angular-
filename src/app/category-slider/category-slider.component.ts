import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from '../category';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent implements OnInit {
  constructor(private _ProductsService: ProductsService) { }
  categories: Category[] = [];
  ngOnInit(): void {
    this._ProductsService.getcategories().subscribe({
      next: (response) => {
        console.log(response.data)
        this.categories = response.data
      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    smartSpeed: 10,
    autoplaySpeed: 500,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 4
      },
      740: {
        items: 6
      },
      940: {
        items: 7
      }
    },
    nav: false
  }
}
