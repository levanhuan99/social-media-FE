import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {Account} from '../../models/Account';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-infor',
  templateUrl: './user-infor.component.html',
  styleUrls: ['./user-infor.component.css']
})
export class UserInforComponent implements OnInit {


  account: Account;

  editForm: FormGroup = new FormGroup({
    nickName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl('')
  });

  constructor(private userService: UserService, private tokenStorage: TokenStorageService, private fb: FormBuilder, private route: Router) {
  }

  id = +this.tokenStorage.getId();

  ngOnInit(): void {
    this.getUser();
  }


//Function To Display Popup
  div_show() {
    document.getElementById('abc').style.display = 'block';
  }

//Function to Hide Popup
  div_hide() {
    //
    const newAccount: Account = {
      id: this.id,
      nickName: this.editForm.value.nickName,
      email: this.editForm.value.email,
      phoneNumber: this.editForm.value.phoneNumber.toString()

    };

    // @ts-ignore
    this.userService.editAccount(this.id, newAccount).subscribe((resp: Account) => {
      this.account = resp;
      this.tokenStorage.clearTokens();
      this.route.navigate(['login']);
    });
    document.getElementById('abc').style.display = 'none';

  }


  getUser() {
    // @ts-ignore
    this.userService.getAccount(this.id).subscribe((resp: Account) => {
      this.account = resp;
      console.log(this.account);
    });
  }

}
