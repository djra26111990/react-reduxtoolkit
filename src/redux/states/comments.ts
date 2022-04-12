import { Comments } from "../../models/comments";
import { createSlice } from "@reduxjs/toolkit";

export const CommentEmptyState: Comments[] = [
  {
    title: "",
    content: "",
    publishedAt: "",
  },
];

export const commentSlice = createSlice({
  name: "comments",
  initialState: CommentEmptyState,
  reducers: {
    createComment: (state, action) => [...state, action.payload],
    deleteAllComments: () => CommentEmptyState,
  },
});

export const { createComment, deleteAllComments } =
  commentSlice.actions;

export default commentSlice.reducer;
