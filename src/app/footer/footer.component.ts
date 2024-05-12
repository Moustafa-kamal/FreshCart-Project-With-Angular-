import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // isSpin: boolean = false;

  constructor(){ 
  }

  ngOnInit(): void {
  
    // if( this.isSpin == true){
    //   document.getElementById('footer')?.classList.replace("d-block", "d-none")
    // }
    // else{
    //   document.getElementById('footer')?.classList.replace("d-none", "d-block")
    // }
   
  }
}
