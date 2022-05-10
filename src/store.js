import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducers/postsSlice";
import countriesReducer from "./reducers/countriesSlice";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        countries: countriesReducer,
    },
});
