import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-infor',
  templateUrl: './user-infor.component.html',
  styleUrls: ['./user-infor.component.css']
})
export class UserInforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


//Function To Display Popup
   div_show() {
    document.getElementById('abc').style.display = "block";
  }
//Function to Hide Popup
   div_hide(){
    document.getElementById('abc').style.display = "none";
  }

}
