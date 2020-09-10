import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Account} from '../models/Account';

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

  searchFriends(keyword: string,senderid:string): Observable<any> {
    return this.http.get<any>(this.url + 'api/friends/search?q=' + keyword+'&&senderId='+senderid);
  }

  getFriendList(){
    return new Array<Account>();
  }

  sendFriendRequest(reciverId:number,senderId:number):Observable<any>{
    // @ts-ignore
    return this.http.post<any>(this.url+'api/friends/sendRequest?senderId='+reciverId+'&&reciverId='+senderId);
  }
}
