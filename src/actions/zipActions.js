import axios from "axios";
import {
    zipDetailsError,
    zipDetailsLoaded,
    zipDetailsLoading,
} from "../reducers/zipSlice";

import { validateZip } from "../utils/helperFunctions";

export const getDetailsByZip = (zipcode) => async (dispatch) => {
    try {
        dispatch(zipDetailsLoading());

        const isValid = validateZip(zipcode);

        if (!isValid) {
            throw new Error("Invalid zip");
        }

        const { data } = await axios.get(
            `https://api.zippopotam.us/us/${zipcode}`
        );

        dispatch(zipDetailsLoaded(data));
    } catch (error) {
        let errorMessage = error.message;

        if (error.response?.status === 404) {
            errorMessage = "Zip not found";
        }
        dispatch(zipDetailsError(errorMessage));
    }
};
