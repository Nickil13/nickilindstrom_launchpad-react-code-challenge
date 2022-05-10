import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
    postsLoading,
    postsLoaded,
    postsError,
    postDeleted,
    postLoaded,
} from "../reducers/postsSlice";

// Fetch all posts
export const listPosts = () => async (dispatch) => {
    try {
        dispatch(postsLoading());
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20"
        );

        dispatch(postsLoaded(data));
    } catch (error) {
        let errorMessage = error.message;
        dispatch(postsError(errorMessage));
    }
};

// Add a new post
export const addPost = createAsyncThunk(
    "posts/addPost",
    async (postInfo, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.post(
                "https://jsonplaceholder.typicode.com/posts",
                postInfo,
                config
            );
            return data;
        } catch (error) {
            let errorMessage = error.message;
            return rejectWithValue(errorMessage);
        }
    }
);

export const getPostById = (id) => async (dispatch) => {
    try {
        dispatch(postsLoading());

        const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        dispatch(postLoaded(data));
    } catch (error) {
        let errorMessage = error.message;
        dispatch(postsError(errorMessage));
    }
};

export const filterPostsById = (id) => async (dispatch) => {
    try {
        dispatch(postsLoading());

        if (isNaN(id)) {
            throw new Error("Not a valid id.");
        }

        const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        dispatch(postsLoaded([data]));
    } catch (error) {
        let errorMessage = error.message;
        if (error.response?.status === 404) {
            errorMessage = "No post found with that id.";
        }
        dispatch(postsError(errorMessage));
    }
};

export const editPost = createAsyncThunk(
    "posts/editPost",
    async (postInfo, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.put(
                `https://jsonplaceholder.typicode.com/posts/${postInfo.id}`,
                postInfo,
                config
            );

            return data;
        } catch (error) {
            let errorMessage = error.message;
            return rejectWithValue(errorMessage);
        }
    }
);

export const deletePost = (id) => async (dispatch) => {
    try {
        dispatch(postsLoading());
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

        dispatch(postDeleted(id));
    } catch (error) {
        let errorMessage = error.message;
        dispatch(postsError(errorMessage));
    }
};
