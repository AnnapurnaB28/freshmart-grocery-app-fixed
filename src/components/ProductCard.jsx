import React from "react";

import { NavLink } from "react-router-dom";

const ProductCard = ({ item }) => {

    return (

        <NavLink to={`/product/${item.id}`}>

            <div className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition duration-300 border border-gray-100 w-full">

                <div className="flex justify-center">

                    <img
                        className="w-full h-28 sm:h-32 md:h-36 object-contain"
                        src={item.image}
                        alt={item.name}
                    />

                </div>

                <p className="text-[10px] sm:text-xs text-gray-500 mt-2">
                    10 mins
                </p>

                <h2 className="font-semibold text-xs sm:text-sm mt-1 min-h-[40px]">
                    {item.name}
                </h2>

                <div className="flex items-center justify-between mt-3 gap-2">
                    <p className="text-gray-500 text-sm">
                        {item.unit}
                    </p>

                    <p className="font-bold text-sm sm:text-base">
                        ₹{item.price}
                    </p>

                    <button className="border border-green-600 text-green-600 px-3 py-1 rounded-lg">
                        ADD
                    </button>

                </div>

            </div>

        </NavLink>

    )

}

export default ProductCard