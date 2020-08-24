import {Injectable} from '@angular/core';

const LOGGED_STATUS = 'logged in';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() {
  }


  public saveId(id: number) {
    if (this.isLoggIn()){
      localStorage.removeItem('id');
    }
    localStorage.setItem('id', String(id));
  }

  public saveEmail(email:string){
    if (this.isLoggIn()){
      localStorage.removeItem('email');
    }
    localStorage.setItem('email',email);
  }

  public saveRoles(roles:any){
    if (this.isLoggIn()){
      localStorage.removeItem('roles');
    }
    localStorage.setItem('roles',JSON.stringify(roles));
  }

  public saveAccessToken(accessToken:string){
    if (this.isLoggIn()){
      localStorage.removeItem('accessToken');
    }
    localStorage.setItem('accessToken',accessToken);
  }

  public saveLoggedStatus(){
    if (this.isLoggIn()){
      localStorage.removeItem('accessToken');
    }
    localStorage.setItem('logged_status','logged');
  }

  public isLoggIn(): boolean {
    if (localStorage.getItem('logged_status')==='logged') {
      return true;
    }
    else {
      return false;
    }
  }


}
