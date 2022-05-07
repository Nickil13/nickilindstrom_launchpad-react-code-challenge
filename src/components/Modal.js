import React, { useState } from "react";

export default function Modal({ isShowing, setIsModalShowing }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState("");

    const handleSubmitForm = (e) => {
        e.preventDefault();
    };
    return (
        <div className={`modal ${isShowing && "show"}`}>
            <div className="modal-content">
                <h3 className="modal-content__title">Add a new post</h3>
                <form id="add-post-form" onSubmit={handleSubmitForm}>
                    <div className="input-control">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={title}
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
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </div>
                    <div className="input-control">
                        <label htmlFor="title">UserId</label>
                        <input
                            type="text"
                            id="userId"
                            name="userId"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                        />
                    </div>
                    <button className="btn" type="submit">
                        Submit
                    </button>
                </form>

                <span
                    className="modal__close-btn"
                    onClick={() => setIsModalShowing(false)}
                >
                    &times;
                </span>
            </div>
        </div>
    );
}
