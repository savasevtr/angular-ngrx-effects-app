import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/models/app-state.model';
import { Post } from './store/models/post.model';
import { v4 as uuid } from 'uuid';
import { AddItemAction, DeleteItemAction, LoadPostAction, ShowItemAction } from './store/actions/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx-effects-app';

  posts: Observable<Array<Post>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>
  newPost: Post = { id: '', title: '', description: '', image_url: '' };
  post: Observable<Post>;
  loadingPost$: Observable<boolean>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.posts = this.store.select(store => store.post.list);
    this.loading$ = this.store.select(store => store.post.loading);
    this.error$ = this.store.select(store => store.post.error);
    this.post = this.store.select(store => store.post.post);
    this.loadingPost$ = this.store.select(store => store.post.post_loading);
    this.store.dispatch(new LoadPostAction());
  }

  addItem() {
    this.newPost.id = uuid();
    this.store.dispatch(new AddItemAction(this.newPost));
    this.newPost = { id: '', title: '', description: '', image_url: '' };
  }

  showItem(id: string) {
    this.store.dispatch(new ShowItemAction(id));
    console.log(this.post);
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}
