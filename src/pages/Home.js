import React, { useState, useEffect } from "react";
import { Loading, Message, Modal, Post, Searchbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { listPosts, getPostById } from "../actions/postsActions";

export default function Home() {
    const {
        posts,
        loading,
        error,
        addingPostSuccess,
        deletePostSuccess,
        editingPostSuccess,
    } = useSelector((state) => state.posts);
    const [isModalShowing, setIsModalShowing] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (!posts.length > 0) {
            dispatch(listPosts());
        }
    }, [posts, dispatch]);

    useEffect(() => {
        if (!isModalShowing) {
            setIsEditing(false);
        }
    }, [isModalShowing, dispatch]);

    useEffect(() => {
        setMessage("");
        if (addingPostSuccess) {
            setMessage("Post successfully added");
        } else if (deletePostSuccess) {
            setMessage("Post successfully deleted");
        } else if (editingPostSuccess) {
            setMessage("Post successfully edited");
        }
    }, [addingPostSuccess, deletePostSuccess, editingPostSuccess]);
    const handleEditPost = (id) => {
        setIsEditing(true);
        setIsModalShowing(true);
        dispatch(getPostById(id));
    };

    return (
        <>
            <div className="container">
                <h1>Posts</h1>
                <div className="toolbar">
                    <Searchbar />
                    <button
                        className="btn"
                        onClick={() => setIsModalShowing(true)}
                    >
                        Add a new post
                    </button>
                </div>
                {message && <Message status="success">{message}</Message>}
                {/* {addingPostSuccess && (
                    <Message status="success"></Message>
                )}
                {deletePostSuccess && (
                    <Message status="success">
                        
                    </Message>
                )}
                {editingPostSuccess && (
                    <Message status="success"></Message>
                )} */}
                {loading ? (
                    <Loading />
                ) : error ? (
                    <Message>{error}</Message>
                ) : (
                    <div className="posts">
                        {posts?.map((post) => {
                            return (
                                <Post
                                    key={post.id}
                                    {...post}
                                    handleEditPost={handleEditPost}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
            <Modal
                isShowing={isModalShowing}
                setIsModalShowing={setIsModalShowing}
                isEditing={isEditing}
            />
        </>
    );
}
