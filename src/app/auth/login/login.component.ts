import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {JwtResponse} from '../../models/JwtResponse';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private route: Router, private tokenStorage: TokenStorageService) {
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
    this.authService.login(data).subscribe((resp: JwtResponse) => {

      //save user info in localstorage and navigate to user`home

      if (!this.tokenStorage.isLoggIn()) {
        this.tokenStorage.saveId(resp.id);
        this.tokenStorage.saveEmail(resp.email);
        this.tokenStorage.saveAccessToken(resp.accessToken);
        this.tokenStorage.saveRoles(resp.roles);
        this.tokenStorage.saveLoggedStatus();
      }
      this.route.navigate(['user/home']);

    });

  }

  register(){
    this.route.navigate(['register']);
  }
}
