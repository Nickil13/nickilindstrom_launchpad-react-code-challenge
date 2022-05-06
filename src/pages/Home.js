import React, { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "../components";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20"
                );

                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="container">
            <h1>Posts</h1>
            <div className="posts">
                {posts?.map((post) => {
                    return <Post key={post.id} {...post} />;
                })}
            </div>
        </div>
    );
}
