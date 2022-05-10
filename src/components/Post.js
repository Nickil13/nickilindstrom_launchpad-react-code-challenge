import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../actions/postsActions";

export default function Post({ id, title, body, handleEditPost }) {
    const dispatch = useDispatch();

    const handleDeletePost = () => {
        dispatch(deletePost(id));
    };

    return (
        <div className="post">
            <h2 className="post__title">{title}</h2>
            <span className="post__id">{id}</span>
            <p>{body}</p>
            <div className="post__btns">
                <button className="btn" onClick={() => handleEditPost(id)}>
                    Edit
                </button>
                <button className="btn" onClick={handleDeletePost}>
                    Delete
                </button>
            </div>
        </div>
    );
}
