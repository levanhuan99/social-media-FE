import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = environment.API_URL;
  constructor(private http: HttpClient) { }

  createPost(post:Post):Observable<any>{
    return this.http.post<any>(this.url + 'api/posts/create',post);
  }
}
