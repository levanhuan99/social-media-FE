import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  login(account: { password: any; email: any }): Observable<any> {
    return this.http.post<any>(this.url + 'login', account);
  }

  logout() {
    localStorage.clear();
    return this.http.get(this.url + 'logout');
  }

  register(account:Account):Observable<any>{
    return this.http.post<any>(this.url+'register',account);
  }

}
