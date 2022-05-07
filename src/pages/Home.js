import React, { useState, useEffect } from "react";
import { Modal, Post } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { listPosts } from "../actions/postsActions";

export default function Home() {
    const { posts, loading, error } = useSelector((state) => state.posts);
    const [isModalShowing, setIsModalShowing] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!posts.length > 0) {
            dispatch(listPosts());
        }
    }, [posts, dispatch]);

    return (
        <>
            <div className="container">
                <h1>Posts</h1>
                <button className="btn" onClick={() => setIsModalShowing(true)}>
                    Add a new post
                </button>
                {loading ? (
                    <div>Loading....</div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    <div className="posts">
                        {posts?.map((post) => {
                            return <Post key={post.id} {...post} />;
                        })}
                    </div>
                )}
            </div>
            <Modal
                isShowing={isModalShowing}
                setIsModalShowing={setIsModalShowing}
            />
        </>
    );
}
