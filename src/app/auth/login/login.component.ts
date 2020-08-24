import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService:AuthService,private route:Router) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });

  }

  submit() {
    const data = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.authService.login(data).subscribe(resp=>{
      if (localStorage.getItem('user')!=null){
        console.log('đã login rồi');
      }else {
        localStorage.setItem('user',JSON.stringify(resp));
        console.log('chưa login');
      }
      this.route.navigate(['user/home'])
    });

  }


}
