import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, editPost } from "../actions/postsActions";
import { postAddedReset, postEditedReset } from "../reducers/postsSlice";
import { VscClose } from "react-icons/vsc";
import Message from "./Message";

export default function Modal({ isShowing, setIsModalShowing, isEditing }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState("");
    const dispatch = useDispatch();
    const {
        addingPostSuccess,
        addingPostError,
        editingPostSuccess,
        currentPost,
    } = useSelector((state) => state.posts);

    useEffect(() => {
        if (isEditing && currentPost) {
            setTitle(currentPost.title);
            setBody(currentPost.body);
            setUserId(currentPost.userId);
        }
    }, [currentPost, isEditing]);

    useEffect(() => {
        if (addingPostSuccess || editingPostSuccess) {
            // Close modal
            setIsModalShowing(false);
        }
    }, [addingPostSuccess, editingPostSuccess, setIsModalShowing]);

    useEffect(() => {
        if (isShowing) {
            // Clear form fields
            setTitle("");
            setBody("");
            setUserId("");

            dispatch(postAddedReset());
            dispatch(postEditedReset());
        }
    }, [isShowing, dispatch]);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const postInfo = {
            title,
            body,
            userId,
        };

        if (isEditing) {
            postInfo.id = currentPost.id;
            dispatch(editPost(postInfo));
        } else {
            dispatch(addPost(postInfo));
        }
    };

    return (
        <div className={`modal ${isShowing && "show"}`}>
            <div className="modal-content">
                <h3 className="modal-content__title">
                    {isEditing ? "Edit post" : "Add a new post"}
                </h3>
                <form id="add-post-form" onSubmit={handleSubmitForm}>
                    <div className="input-control">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            required
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="input-control">
                        <label htmlFor="title">Body</label>
                        <textarea
                            id="body"
                            name="body"
                            rows="5"
                            value={body}
                            required
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </div>
                    <div className="input-control">
                        <label htmlFor="title">UserId</label>
                        <input
                            type="number"
                            id="userId"
                            name="userId"
                            value={userId}
                            min="0"
                            required
                            onChange={(e) => setUserId(e.target.value)}
                        />
                    </div>
                    {addingPostError && (
                        <Message status="error">{addingPostError}</Message>
                    )}
                    <button className="btn modal__submit-btn" type="submit">
                        Submit
                    </button>
                </form>

                <span
                    className="modal__close-btn"
                    onClick={() => setIsModalShowing(false)}
                >
                    <VscClose />
                </span>
            </div>
        </div>
    );
}
