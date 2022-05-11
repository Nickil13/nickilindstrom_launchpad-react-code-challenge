import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { VscClose } from "react-icons/vsc";

export default function Navbar() {
    const [isMenuShowing, setIsMenuShowing] = useState(false);
    const location = useLocation();

    React.useEffect(() => {
        setIsMenuShowing(false);
    }, [location]);

    return (
        <nav>
            <div className="nav-container">
                <ul className={`nav-links  ${isMenuShowing && "active"}`}>
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
                    <li>
                        <NavLink
                            to="/universities"
                            className={({ isActive }) =>
                                isActive ? "active-nav" : ""
                            }
                        >
                            Universities
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/postal-lookup"
                            className={({ isActive }) =>
                                isActive ? "active-nav" : ""
                            }
                        >
                            Postal Lookup
                        </NavLink>
                    </li>
                </ul>
                <span
                    className="menu-btn"
                    onClick={() => setIsMenuShowing(true)}
                >
                    <HiMenuAlt3 />
                </span>
                {isMenuShowing && (
                    <span
                        className="close-menu-btn"
                        onClick={() => setIsMenuShowing(false)}
                    >
                        <VscClose />
                    </span>
                )}
            </div>
        </nav>
    );
}
