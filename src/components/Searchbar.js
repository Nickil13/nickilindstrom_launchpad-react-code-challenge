import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { filterPostsById, listPosts } from "../actions/postsActions";
import { postSuccessReset } from "../reducers/postsSlice";

export default function Searchbar() {
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchValue === "") {
            dispatch(listPosts());
        } else {
            dispatch(filterPostsById(searchValue));
        }

        dispatch(postSuccessReset());
    };
    return (
        <div className="searchbar">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for a post by id"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button className="btn searchbar__btn" type="submit">
                    <AiOutlineSearch />
                </button>
            </form>
        </div>
    );
}
