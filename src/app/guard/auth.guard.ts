import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {TokenStorageService} from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  currentToken: string;

  constructor(private token: TokenStorageService, private route: Router) {
    this.currentToken = this.token.getToken();
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentToken != null) {
      return true;
    } else {
      this.route.navigate(['/', 'login']);
    }
  }

}
