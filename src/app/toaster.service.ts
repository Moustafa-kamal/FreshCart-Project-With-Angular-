import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private _ToastrService: ToastrService) { }


  showSuccess(message: string, title: string) {
    this._ToastrService.success(message, title);
  }


  showError(message: string, title: string) {
    this._ToastrService.error(message,  title);
  }





}
