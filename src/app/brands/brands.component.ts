import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';
import { Brands } from '../brands'
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  constructor(private _BrandsService: BrandsService,private _ProductsService:ProductsService) { }

  brandsItems: Brands[] = []
  isSpin: boolean = false;
  ngOnInit(): void {

this.isSpin=true
    this._BrandsService.getAllBrands().subscribe({
      next: (response) => {
        console.log(response.data)
        this.brandsItems =response.data
        this._ProductsService.footer.emit()
        this.isSpin=false
      },
      error: (err) => {
        console.log(err)
        this.isSpin=false
      }
    })


// this._BrandsService.getAll('64089fe824b25627a25315d1').subscribe({
//   next:(response)=>console.log(response)
// })

  }

}
