import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PostService } from 'src/app/services/post.service';
import { AddItemAction, AddItemFailureAction, AddItemSuccessAction, DeleteItemAction, DeleteItemFailureAction, DeleteItemSuccessAction, LoadPostAction, LoadPostFailureAction, LoadPostSuccessAction, PostActionTypes, ShowItemAction, ShowItemFailureAction, ShowItemSuccessAction } from 'src/app/store/actions/post.actions';

@Injectable()
export class PostEffects {

  constructor(
    private actions$: Actions,
    private postService: PostService
  ) {}

  @Effect() loadPost$ = this.actions$.pipe(
    ofType<LoadPostAction>(PostActionTypes.LOAD_POST),
    mergeMap(
      () => this.postService.getPosts().pipe(
        map(data => {
          return new LoadPostSuccessAction(data)
        }),
        catchError(error => of(new LoadPostFailureAction(error)))
      )
    )
  )

  @Effect() addPost$ = this.actions$.pipe(
    ofType<AddItemAction>(PostActionTypes.ADD_ITEM),
    mergeMap(
      (data) => this.postService.addPost(data.payload)
        .pipe(
          map(() => new AddItemSuccessAction(data.payload)),
          catchError(error => of(new AddItemFailureAction(error)))
        )
    )
  )

  @Effect() deletePostItem$ = this.actions$.pipe(
    ofType<DeleteItemAction>(PostActionTypes.DELETE_ITEM),
    mergeMap(
      (data) => this.postService.deletePost(data.payload).pipe(
        map(() => new DeleteItemSuccessAction(data.payload)),
        catchError(error => of(new DeleteItemFailureAction(error)))
      )
    )
  )

  @Effect() showItem$ = this.actions$.pipe(
    ofType<ShowItemAction>(PostActionTypes.SHOW_ITEM),
    mergeMap(
      (data) => this.postService.getPost(data.id).pipe(
        map(data => {
          return new ShowItemSuccessAction(data)
        }),
        catchError(error => of(new ShowItemFailureAction(error)))
      )
    )
  )

}
