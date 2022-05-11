import React from "react";

export default function ZipCard({ zipDetails }) {
    return (
        <div className="zip-details">
            <h2>{zipDetails["post code"]}</h2>
            {zipDetails.places && (
                <div className="places">
                    {zipDetails.places.map((place, index) => {
                        return (
                            <div key={index}>
                                <h3 className="place__title">
                                    {place["place name"]},{" "}
                                    {place["state abbreviation"]}
                                </h3>
                                <p>Latitude: {place.latitude}</p>
                                <p>Longitude: {place.longitude}</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
