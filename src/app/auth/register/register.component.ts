import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,private route:Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({

      nickName: [''],
      birthDay: [''],
      phoneNumber: [''],
      email: [''],
      password: [''],
      confirmPassword: ['']
    });
  }

  submit() {

    const newAccount: Account = {
      // @ts-ignore
      nickName: this.registerForm.value.nickName,
      birthDay: this.registerForm.value.birthDay,
      phoneNumber: this.registerForm.value.phoneNumber,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password

    };
    this.authService.register(newAccount).subscribe((resp:any)=>{

      this.route.navigate(['login']);
    });

  }

}
