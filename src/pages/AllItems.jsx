import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { SearchContext } from "../context/SearchContext";

const AllItems = () => {
    const { category } = useParams();
    const { search } = useContext(SearchContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/db.json")
            .then(r => r.json())
            .then(data => setProducts(data.products || []));
    }, []);

    const categoryProducts = category
        ? products.filter(item => item.category.toLowerCase().replace(/\s+/g, "-") === category)
        : products;

    const filteredProducts = categoryProducts.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-6 capitalize">
                {category ? category.replace(/-/g, " ") : "All Items"}
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(item => <ProductCard key={item.id} item={item} />)
                ) : (
                    <h2 className="text-xl font-semibold">No Products Found</h2>
                )}
            </div>
        </div>
    );
};

export default AllItems;
