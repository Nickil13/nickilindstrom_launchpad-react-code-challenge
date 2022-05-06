import axios from "axios";
import { postsLoading, postsLoaded, postsError } from "../reducers/postsSlice";

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
