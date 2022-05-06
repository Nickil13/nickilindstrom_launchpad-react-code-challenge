import { createSlice } from "@reduxjs/toolkit";

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
        },
        postsLoaded: (state, action) => {
            state.posts = [...action.payload];
            state.loading = false;
        },
        postsError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        addPost: (state, action) => {
            state.posts = [state.posts, action.payload];
        },
    },
});

export const { postsLoading, postsLoaded, postsError } = postsSlice.actions;

export default postsSlice.reducer;
