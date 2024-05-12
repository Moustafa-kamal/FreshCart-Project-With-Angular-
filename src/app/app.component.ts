import { Component } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-commerce-Project';
  flag: boolean = false;
  constructor(private _ProductsService: ProductsService) {
    this._ProductsService.footer.subscribe(() => {
      this.flag = true
    })
  }
}
