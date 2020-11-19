import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/models/app-state.model';
import { Post } from './store/models/post.model';
import { v4 as uuid } from 'uuid';
import { AddItemAction, DeleteItemAction, LoadPostAction } from './store/actions/post.actions';

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

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.posts = this.store.select(store => store.post.list);
    this.loading$ = this.store.select(store => store.post.loading);
    this.error$ = this.store.select(store => store.post.error);

    this.store.dispatch(new LoadPostAction());
  }

  addItem() {
    this.newPost.id = uuid();
    this.store.dispatch(new AddItemAction(this.newPost));
    this.newPost = { id: '', title: '', description: '', image_url: '' };
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}
