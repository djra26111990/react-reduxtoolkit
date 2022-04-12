import { configureStore } from '@reduxjs/toolkit';
import { commentSlice } from './states';

export interface CommentStore {
    comments: any;
}

export default configureStore<CommentStore>({
    reducer: {
      comments: commentSlice.reducer
    }
  });