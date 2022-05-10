import axios from "axios";
import {
    countriesError,
    countriesLoaded,
    countriesLoading,
} from "../reducers/countriesSlice";

export const listCountries = () => async (dispatch) => {
    try {
        dispatch(countriesLoading());

        const { data } = await axios.get(
            "http://universities.hipolabs.com/search?country=Canada"
        );

        dispatch(countriesLoaded(data));
    } catch (error) {
        let errorMessage = error.message;
        dispatch(countriesError(errorMessage));
    }
};
