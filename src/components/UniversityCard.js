import React from "react";
import { BsGlobe } from "react-icons/bs";

export default function UniversityCard({ university }) {
    return (
        <div className="university-card">
            <h3 className="university-card__title">{university.name}</h3>
            <div className="university-card__body">
                {university["state-province"] && (
                    <p className="university-card__province">
                        {university["state-province"]}
                    </p>
                )}
                <div className="university-card__site">
                    <BsGlobe className="university-card__site-icon" />
                    {university.web_pages.map((site, index) => {
                        return (
                            <a
                                key={index}
                                href={site}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {site}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
