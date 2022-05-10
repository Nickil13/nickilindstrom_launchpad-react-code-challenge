import { createSlice } from "@reduxjs/toolkit";
import { addPost, editPost } from "../actions/postsActions";

const initialState = {
    posts: [],
    loading: false,
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postsLoading: (state) => {
            state.loading = true;
            state.error = "";
        },
        postsLoaded: (state, action) => {
            state.posts = [...action.payload];
            state.loading = false;
        },
        postLoaded: (state, action) => {
            state.currentPost = action.payload;
            state.loading = false;
        },
        postsError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        postAddedReset: (state) => {
            state.addingPostError = "";
            state.addingPostSuccess = false;
        },
        postEditedReset: (state) => {
            state.editingPostError = "";
            state.editingPostSuccess = false;
        },
        postSuccessReset: (state) => {
            state.editingPostSuccess = false;
            state.addingPostSuccess = false;
            state.deletePostSuccess = false;
        },
        postDeleted: (state, action) => {
            state.posts = state.posts.filter(
                (post) => post.id !== action.payload
            );
            state.loading = false;
            state.deletePostSuccess = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addPost.pending, (state) => {
            state.addingPost = true;
            state.error = "";
        });
        builder.addCase(addPost.fulfilled, (state, action) => {
            state.posts.push(action.payload);
            state.addingPost = false;
            state.addingPostSuccess = true;
        });
        builder.addCase(addPost.rejected, (state, action) => {
            state.addingPostError = action.payload;
            state.addingPost = false;
        });

        builder.addCase(editPost.pending, (state) => {
            state.editingPost = true;
        });
        builder.addCase(editPost.fulfilled, (state, action) => {
            const newPosts = state.posts.map((post) => {
                if (post.id === action.payload.id) {
                    return action.payload;
                }
                return post;
            });
            state.posts = newPosts;
            state.editingPost = false;
            state.editingPostSuccess = true;
        });
        builder.addCase(editPost.rejected, (state, action) => {
            state.editingPostError = action.payload;
            state.editingPost = false;
        });
    },
});

export const {
    postsLoading,
    postsLoaded,
    postLoaded,
    postsError,
    postAddedReset,
    postEditedReset,
    postSuccessReset,
    postDeleted,
} = postsSlice.actions;

export default postsSlice.reducer;
