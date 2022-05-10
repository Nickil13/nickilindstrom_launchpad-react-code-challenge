import React from "react";

export default function Message({ status, children }) {
    return <div className={`message ${status}`}>{children}</div>;
}

Message.defaultProps = {
    status: "default",
};
