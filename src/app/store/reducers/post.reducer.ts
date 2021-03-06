import { PostAction, PostActionTypes } from '../actions/post.actions';
import { Post } from "../models/post.model";

export interface PostState {
  list: Post[],
  loading: boolean,
  error: Error,
  post: Post,
  post_loading: boolean
};

const initialState: PostState = {
  list: [],
  loading: false,
  error: undefined,
  post: undefined,
  post_loading: false
};

export function PostReducer(state: PostState = initialState, action: PostAction) {
  switch (action.type) {
    case PostActionTypes.LOAD_POST:
      return {
        ...state,
        loading: true
      };
    case PostActionTypes.LOAD_POST_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case PostActionTypes.LOAD_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case PostActionTypes.ADD_ITEM:
      return {
        ...state,
        loading: true
      };
    case PostActionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case PostActionTypes.DELETE_ITEM:
      return {
        ...state,
        loading: true
      };
    case PostActionTypes.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false
      };
    case PostActionTypes.DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case PostActionTypes.SHOW_ITEM:
      return {
        ...state,
        post_loading: true
      };
    case PostActionTypes.SHOW_ITEM_SUCCESS:
      return {
        ...state,
        post: action.payload,
        post_loading: false
      };
    case PostActionTypes.SHOW_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        post_loading: false
      };
    default:
      return state;
  }
}
