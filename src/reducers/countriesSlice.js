import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: [],
    loading: false,
    error: "",
};

export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        countriesLoading: (state) => {
            state.loading = true;
            state.error = "";
        },
        countriesLoaded: (state, action) => {
            state.countries = [...action.payload];
            state.loading = false;
        },
        countriesError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { countriesLoading, countriesLoaded, countriesError } =
    countriesSlice.actions;

export default countriesSlice.reducer;
