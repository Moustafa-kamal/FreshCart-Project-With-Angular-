import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Orders } from '../orders'
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  constructor(private _CartService: CartService,private _ProductsService:ProductsService) { }
  cartOrders:  Orders[] = []
  totalOrdersPrice: Orders | undefined;
  ngOnInit(): void {
    this._CartService.getAllOrders().subscribe({
      next: (response) => {
        console.log(response.data)
        this.cartOrders = response.data
        this._ProductsService.footer.emit()
        this.totalOrdersPrice = response.data[0]
      },
      error: (err) => console.log(err)
    })

  }

}
