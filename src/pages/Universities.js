import React from "react";

export default function Universities() {
    const handleSelectCountry = (e) => {
        e.preventDefault();
    };
    return (
        <div className="container">
            <h1>Universities</h1>
            <form onSubmit={handleSelectCountry}>
                <label htmlFor="country">Country</label>
                <select className="country-select" name="country" id="country">
                    <option value="default">Select a country</option>
                </select>
            </form>
        </div>
    );
}
