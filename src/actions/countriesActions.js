import axios from "axios";
import {
    countriesError,
    countriesLoaded,
    countriesLoading,
} from "../reducers/countriesSlice";
import { sortAlphabetically } from "../utils/helperFunctions";

export const listCountries = () => async (dispatch) => {
    try {
        dispatch(countriesLoading());

        const { data } = await axios.get(
            "https://countriesnow.space/api/v0.1/countries/info?returns=none"
        );

        //Sort the country data alphabetically
        let countries = data.data;
        dispatch(countriesLoaded(sortAlphabetically(countries)));
    } catch (error) {
        let errorMessage = error.message;
        dispatch(countriesError(errorMessage));
    }
};
