import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducers/postsSlice";
import countriesReducer from "./reducers/countriesSlice";
import universitiesReducer from "./reducers/universitiesSlice";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        universities: universitiesReducer,
        countries: countriesReducer,
    },
});
