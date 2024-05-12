import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean = false

  cartNumber: number = 0
  constructor(private _AuthenticationService: AuthenticationService, private _CartService: CartService) {

    _CartService.numberOFCartItems.subscribe({
      next: (value) => this.cartNumber = value
    })

  }

  logOut() {
    this._AuthenticationService.logOut()
  }

  ngOnInit(): void {
    // if (this._AuthenticationService.userData !== null) {
    //   this.isLogin = true
    // }
    // else {
    //   this.isLogin = false
    // }

    this._AuthenticationService.userData.subscribe({
      next: () => {
        if (this._AuthenticationService.userData.getValue() !== null) {
          this.isLogin = true
        }
        else {
          this.isLogin = false
        }
      }
    })
  }
}
