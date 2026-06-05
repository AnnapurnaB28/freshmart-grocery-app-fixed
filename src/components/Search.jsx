import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { SearchContext } from "../context/SearchContext";

const Search = () => {

    const { search, setSearch } = useContext(SearchContext);

    const navigate = useNavigate();

    const handleSearch = (e) => {

        setSearch(e.target.value);

        navigate("/items");

    };

    return (

        <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={handleSearch}
            className="
            w-full border border-gray-300 
            rounded-xl px-4 py-2 
            outline-none
            "
        />

    );

};

export default Search;