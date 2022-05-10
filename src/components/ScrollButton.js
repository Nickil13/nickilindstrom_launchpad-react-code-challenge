import React from "react";
import { BsArrowUpShort } from "react-icons/bs";

export default function ScrollButton() {
    const btnRef = React.useRef(null);

    React.useEffect(() => {
        window.addEventListener("scroll", showOnScroll);
        return () => {
            window.removeEventListener("scroll", showOnScroll);
        };
    }, []);

    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const showOnScroll = () => {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            if (btnRef) {
                btnRef.current.style.display = "flex";
            }
        } else {
            if (btnRef) {
                btnRef.current.style.display = "none";
            }
        }
    };

    return (
        <button className="btn scroll-btn" ref={btnRef} onClick={scrollToTop}>
            <BsArrowUpShort />
        </button>
    );
}
