import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <div className="nav-container">
                <ul className="nav-links">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active-nav" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>Universities</li>
                    <li>Postal Lookup</li>
                </ul>
            </div>
        </nav>
    );
}
