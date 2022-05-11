import React, { useState } from "react";
import { getDetailsByZip } from "../actions/zipActions";
import { useDispatch, useSelector } from "react-redux";
import { Message, ZipCard } from "../components";

export default function PostalLookup() {
    const [zipCode, setZipCode] = useState("");
    const { zipDetails, loading, error } = useSelector((state) => state.zip);
    const dispatch = useDispatch();

    const handleGetDetails = (e) => {
        e.preventDefault();
        dispatch(getDetailsByZip(zipCode));
    };
    return (
        <div className="container">
            <h1>Postal Lookup</h1>
            <p>Look up area details by zip code.</p>
            <form onSubmit={handleGetDetails} className="zip-form">
                <div className="input-control">
                    <label htmlFor="zip">Zip code</label>
                    <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="Enter a zip code"
                        value={zipCode}
                        onChange={(e) => {
                            setZipCode(e.target.value);
                        }}
                    />
                </div>
                <button className="btn form-btn" type="submit">
                    Get details
                </button>
            </form>

            {loading ? (
                <Message>Loading...</Message>
            ) : error ? (
                <Message>{error}</Message>
            ) : (
                zipDetails.country && <ZipCard zipDetails={zipDetails} />
            )}
        </div>
    );
}
