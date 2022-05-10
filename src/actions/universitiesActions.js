import axios from "axios";
import {
    universitiesError,
    universitiesLoaded,
    universitiesLoading,
} from "../reducers/universitiesSlice";

export const getUniversitiesByCountry = (country) => async (dispatch) => {
    try {
        dispatch(universitiesLoading());

        const { data } = await axios.get(
            `http://universities.hipolabs.com/search?country=${country}`
        );

        dispatch(universitiesLoaded({ universities: data, country }));
    } catch (error) {
        let errorMessage = error.message;
        dispatch(universitiesError(errorMessage));
    }
};
