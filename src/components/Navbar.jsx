import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Search from "../components/Search";
import { useCart } from "../context/CartContext";

const Navbar = ({ setIsOpen }) => {
    const { cartCount } = useCart();

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <NavLink to="/"><h1 className="text-3xl font-bold text-green-600">FreshMart</h1></NavLink>
                    <div className="w-full md:w-[40%]"><Search /></div>
                    <div className="flex items-center gap-4 flex-wrap justify-center">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-green-600 font-medium" : "text-gray-700 font-medium"}>Home</NavLink>
                        <NavLink to="/items" className={({ isActive }) => isActive ? "text-green-600 font-medium" : "text-gray-700 font-medium"}>All Items</NavLink>
                        <NavLink to="/login">
                            <button className="border border-green-500 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50">Login</button>
                        </NavLink>
                        <button onClick={() => setIsOpen(true)} className="relative flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                            <FaShoppingCart className="text-lg hover:animate-bounce" />
                            Cart
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{cartCount}</span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
