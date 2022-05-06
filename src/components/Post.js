import React from "react";

export default function Post({ userId, title, body }) {
    return (
        <div className="post">
            <h2 className="post__title">{title}</h2>
            <span className="post__id">{userId}</span>
            <p>{body}</p>
            <div className="post__btns">
                <button className="btn">Edit</button>
                <button className="btn">Delete</button>
            </div>
        </div>
    );
}
