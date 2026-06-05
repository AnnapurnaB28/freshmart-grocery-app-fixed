import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("/db.json")
            .then(r => r.json())
            .then(data => setCategories(data.categories || []))
            .catch(err => console.log(err))
    }, []);

    return (
        <section className="container mx-auto px-3 sm:px-4 mt-8 sm:mt-10">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold whitespace-nowrap">Categories</h2>
                <div className="h-[2px] w-full bg-green-500 rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-5">
                {categories.map(item => (
                    <NavLink to={`/items/${item.name.toLowerCase().replace(/\s+/g, "-")}`} key={item.id}>
                        <div style={{ backgroundColor: item.bgColor }} className="rounded-2xl p-3 sm:p-5 flex flex-col items-center hover:scale-105 transition duration-300 cursor-pointer shadow-sm hover:shadow-md min-h-[150px]">
                            <img className="w-20 h-16 sm:w-24 sm:h-20 object-contain" src={item.image} alt={item.name} />
                            <h3 className="mt-3 sm:mt-4 text-center font-semibold text-xs sm:text-sm line-clamp-2">{item.name}</h3>
                        </div>
                    </NavLink>
                ))}
            </div>
        </section>
    );
};

export default Categories;
