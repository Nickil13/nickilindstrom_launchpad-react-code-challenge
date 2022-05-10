import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    universities: [],
    loading: false,
    error: "",
};

export const universitiesSlice = createSlice({
    name: "universities",
    initialState,
    reducers: {
        universitiesLoading: (state) => {
            state.loading = true;
            state.error = "";
        },
        universitiesLoaded: (state, action) => {
            state.universities = [...action.payload.universities];
            state.selectedCountry = action.payload.country;
            state.loading = false;
        },
        universitiesError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { universitiesLoading, universitiesLoaded, universitiesError } =
    universitiesSlice.actions;

export default universitiesSlice.reducer;
