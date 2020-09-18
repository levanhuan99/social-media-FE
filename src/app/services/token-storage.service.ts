import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() {
  }


  public saveId(id: number) {
    if (this.isLoggIn()) {
      localStorage.removeItem('id');
    }
    localStorage.setItem('id', String(id));
  }

  public saveEmail(email: string) {
    if (this.isLoggIn()) {
      localStorage.removeItem('email');
    }
    localStorage.setItem('email', email);
  }

  public saveRoles(roles: any) {
    if (this.isLoggIn()) {
      localStorage.removeItem('roles');
    }
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public saveAccessToken(accessToken: string) {
    if (this.isLoggIn()) {
      localStorage.removeItem('accessToken');
    }
    localStorage.setItem('accessToken', accessToken);
  }

  public saveLoggedStatus() {
    if (this.isLoggIn()) {
      localStorage.removeItem('accessToken');
    }
    localStorage.setItem('logged_status', 'logged');
  }

  public saveUserName(name:string) {
    if (this.isLoggIn()) {
      localStorage.removeItem('name');
    }
    localStorage.setItem('name', name);
  }

  public isLoggIn(): boolean {
    if (localStorage.getItem('logged_status') === 'logged') {
      return true;
    } else {
      return false;
    }
  }


  public getToken(): string {
    return localStorage.getItem('accessToken');
  }

  public getId(): string {
    return localStorage.getItem('id');
  }
  public clearTokens(){
    return localStorage.clear();
  }
  public getUserName():string{
    return localStorage.getItem('name');
  }


}
