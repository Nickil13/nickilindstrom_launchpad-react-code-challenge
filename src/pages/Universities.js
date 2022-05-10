import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listCountries } from "../actions/countriesActions";
import { getUniversitiesByCountry } from "../actions/universitiesActions";
import { Loading, Message, ScrollButton, UniversityCard } from "../components";

export default function Universities() {
    const {
        universities,
        loading: universitiesLoading,
        selectedCountry,
    } = useSelector((state) => state.universities);
    const { countries } = useSelector((state) => state.countries);
    const dispatch = useDispatch();
    const countryRef = useRef(null);

    React.useEffect(() => {
        if (!countries.length > 0) {
            dispatch(listCountries());
        }
    }, []);

    const handleSelectCountry = (e) => {
        e.preventDefault();
        let selectedCountry = countryRef.current.value;
        dispatch(getUniversitiesByCountry(selectedCountry));
    };
    return (
        <div className="container">
            <h1>Universities</h1>
            <p>
                Select a country from the dropdown menu to see a list of
                available universities.
            </p>

            <form id="country-form" onChange={handleSelectCountry}>
                <label htmlFor="country">Country</label>
                <select
                    className="country-form__select"
                    name="country"
                    id="country"
                    ref={countryRef}
                >
                    <option value="default">Select a country</option>
                    {countries.map((country, index) => {
                        return (
                            <option key={index} value={country.name}>
                                {country.name}
                            </option>
                        );
                    })}
                </select>
            </form>
            {universitiesLoading ? (
                <Loading />
            ) : universities.length > 0 ? (
                <div className="universities">
                    <h2 className="universities__title">
                        <span className="universities-num">
                            {universities.length}
                        </span>
                        {universities.length > 1
                            ? " Universities "
                            : " University "}
                        found in {selectedCountry}
                    </h2>
                    <div className="university-cards">
                        {universities.map((university, index) => {
                            return (
                                <UniversityCard
                                    key={index}
                                    university={university}
                                />
                            );
                        })}
                    </div>
                </div>
            ) : (
                selectedCountry && <Message>No universities.</Message>
            )}
            <ScrollButton />
        </div>
    );
}
