import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/operators';
import { Post } from '../store/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private POST_API_URL = environment.postApiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getPosts() {
    return this.httpClient.get<Array<Post>>(this.POST_API_URL).pipe(delay(3000));
  }

  addPost(post: Post) {
    return this.httpClient.post(this.POST_API_URL, post).pipe(delay(500));
  }

  deletePost(id: string) {
    return this.httpClient.delete(`${this.POST_API_URL}/${id}`).pipe(delay(500));
  }

  getPost(id: string) {
    return this.httpClient.get<Post>(`${this.POST_API_URL}/${id}`).pipe(delay(500));
  }
}
