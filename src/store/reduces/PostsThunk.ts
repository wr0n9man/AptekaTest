import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'react-native-config';

import {IPost} from '~/models';

interface IPostsProps {
  page: number;
  filter: string;
}
// Не понял почему не использовать redux query
export const fetchPosts = createAsyncThunk(
  'post/fetchAll',
  async ({page = 1, filter = ''}: IPostsProps, thunkApi) => {
    try {
      const response = await axios.get<IPost[]>(
        `${Config.API_URL!}posts?title_like=${filter}|body_like=${filter}&_page=${page}`,
      );

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  },
);

export const fetchPost = createAsyncThunk(
  'post/fetch',
  async (id: number, thunkApi) => {
    try {
      const response = await axios.get<IPost[]>(
        `${Config.API_URL!}posts/${id}`,
      );
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  },
);
