import { Action } from '@ngrx/store';
import { Post } from '../models/post.model'

export enum PostActionTypes {
  LOAD_POST = '[POST] Load Post',
  LOAD_POST_SUCCESS = '[POST] Load Post Success',
  LOAD_POST_FAILURE = '[POST] Load Post Failure',
  ADD_ITEM = '[POST] Add Item',
  ADD_ITEM_SUCCESS = '[POST] Add Item Success',
  ADD_ITEM_FAILURE = '[POST] Add Item Failure',
  DELETE_ITEM = '[POST] Delete Item',
  DELETE_ITEM_SUCCESS = '[POST] Delete Item Success',
  DELETE_ITEM_FAILURE = '[POST] Delete Item Failure',
  SHOW_ITEM = '[POST] Show Item',
  SHOW_ITEM_SUCCESS = '[POST] Show Item Success',
  SHOW_ITEM_FAILURE = '[POST] Show Item Failure'
}

export class LoadPostAction implements Action {
  readonly type = PostActionTypes.LOAD_POST
}

export class LoadPostSuccessAction implements Action {
  readonly type = PostActionTypes.LOAD_POST_SUCCESS

  constructor(public payload: Array<Post>) {}
}

export class LoadPostFailureAction implements Action {
  readonly type = PostActionTypes.LOAD_POST_FAILURE

  constructor(public payload: Error) {}
}

export class AddItemAction implements Action {
  readonly type = PostActionTypes.ADD_ITEM

  constructor(public payload: Post) { }
}

export class AddItemSuccessAction implements Action {
  readonly type = PostActionTypes.ADD_ITEM_SUCCESS

  constructor(public payload: Post) { }
}

export class AddItemFailureAction implements Action {
  readonly type = PostActionTypes.ADD_ITEM_FAILURE

  constructor(public payload: Error) { }
}

export class DeleteItemAction implements Action {
  readonly type = PostActionTypes.DELETE_ITEM

  constructor(public payload: string) { }
}

export class DeleteItemSuccessAction implements Action {
  readonly type = PostActionTypes.DELETE_ITEM_SUCCESS

  constructor(public payload: string) { }
}

export class DeleteItemFailureAction implements Action {
  readonly type = PostActionTypes.DELETE_ITEM_FAILURE

  constructor(public payload: string) { }
}

export class ShowItemAction implements Action {
  readonly type = PostActionTypes.SHOW_ITEM

  constructor(public id: string) { }
}

export class ShowItemSuccessAction implements Action {
  readonly type = PostActionTypes.SHOW_ITEM_SUCCESS

  constructor(public payload: Post) { }
}

export class ShowItemFailureAction implements Action {
  readonly type = PostActionTypes.SHOW_ITEM_FAILURE

  constructor(public payload: Error) { }
}

export type PostAction = AddItemAction |
  AddItemSuccessAction |
  AddItemFailureAction |
  DeleteItemAction |
  DeleteItemSuccessAction |
  DeleteItemFailureAction |
  LoadPostAction |
  LoadPostFailureAction |
  LoadPostSuccessAction |
  ShowItemAction |
  ShowItemSuccessAction |
  ShowItemFailureAction;
