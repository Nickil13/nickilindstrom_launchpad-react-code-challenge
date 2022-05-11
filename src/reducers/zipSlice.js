import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    zipDetails: {},
    loading: false,
    error: "",
};

export const zipSlice = createSlice({
    name: "zip",
    initialState,
    reducers: {
        zipDetailsLoading: (state) => {
            state.loading = true;
            state.error = "";
        },
        zipDetailsLoaded: (state, action) => {
            state.zipDetails = { ...action.payload };
            state.loading = false;
        },
        zipDetailsError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { zipDetailsLoading, zipDetailsLoaded, zipDetailsError } =
    zipSlice.actions;

export default zipSlice.reducer;
