import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPost} from '~/models';
import {fetchPost, fetchPosts} from './PostsThunk';

interface IPostState {
  posts: {
    data: IPost[];
    isLoading: boolean;
    isListEmpty: boolean;
    error: string;
  };
  currentPost: {
    data: IPost | null;
    isLoading: boolean;
    error: string;
  };
  filter: string;
}

const initialState: IPostState = {
  posts: {
    data: [],
    isLoading: false,
    isListEmpty: false,
    error: '',
  },
  currentPost: {
    data: null,
    isLoading: false,
    error: '',
  },
  filter: '',
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    changeFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
      state.posts.data = [];
    },
  },
  extraReducers: {
    [fetchPosts.pending.type]: state => {
      state.posts.isLoading = true;
    },
    [fetchPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
      state.posts.isLoading = false;
      state.posts.error = '';
      state.posts.data = state.posts.data.concat(action.payload);
      state.posts.isListEmpty = action.payload.length < 10;
    },
    [fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.posts.isLoading = false;
      state.posts.error = action.payload;
    },
    [fetchPost.pending.type]: state => {
      state.currentPost.isLoading = true;
    },
    [fetchPost.fulfilled.type]: (state, action: PayloadAction<IPost>) => {
      state.currentPost.isLoading = false;
      state.currentPost.error = '';
      state.currentPost.data = action.payload;
    },
    [fetchPost.rejected.type]: (state, action: PayloadAction<string>) => {
      state.currentPost.isLoading = false;
      state.currentPost.error = action.payload;
    },
  },
});

export const postReducer = postSlice.reducer;
