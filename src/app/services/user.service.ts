import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  getAccount(id: number): Observable<Account> {
    return this.http.get<Account>(this.url + 'api/user/' + id + '/detail');
  }

  editAccount(id: number, account: Account): Observable<Account> {
    return this.http.put<Account>(this.url + 'api/user/' + id + '/edit', account);
  }
}
