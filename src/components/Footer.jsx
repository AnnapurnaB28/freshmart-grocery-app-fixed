// components/Footer.jsx

import React from "react";

import { NavLink } from "react-router-dom";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaApple,
    FaGooglePlay
} from "react-icons/fa";

import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {

    return (

        <footer className="bg-green-50 border-t mt-10">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    <div>

                        <h1 className="text-3xl font-extrabold text-green-600">
                            FreshMart
                        </h1>

                        <p className="text-gray-600 mt-4 leading-7">
                            Fresh groceries delivered to your doorstep
                            in just 15 minutes 🚀
                        </p>

                        <div className="flex items-center gap-4 mt-6">

                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-white shadow-md p-3 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-white shadow-md p-3 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-white shadow-md p-3 rounded-full hover:bg-sky-500 hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                <FaTwitter />
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-white shadow-md p-3 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                <FaLinkedinIn />
                            </a>

                        </div>

                    </div>

                    <div>

                        <h2 className="text-xl font-bold mb-5">
                            Quick Links
                        </h2>

                        <ul className="space-y-3 text-gray-600">

                            <li>
                                <NavLink
                                    to="/"
                                    className="hover:text-green-600 transition-all"
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/items"
                                    className="hover:text-green-600 transition-all"
                                >
                                    Categories
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/delivery"
                                    className="hover:text-green-600 transition-all"
                                >
                                    Delivery Areas
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/login"
                                    className="hover:text-green-600 transition-all"
                                >
                                    Login
                                </NavLink>
                            </li>



                        </ul>

                    </div>

                    <div>

                        <h2 className="text-xl font-bold mb-5">
                            Customer Support
                        </h2>

                        <ul className="space-y-3 text-gray-600">

                            <li>
                                <NavLink
                                    to="/help"
                                    className="hover:text-green-600 transition-all"
                                >
                                    Help Center
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/terms"
                                    className="hover:text-green-600 transition-all"
                                >
                                    Terms & Conditions
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/privacy"
                                    className="hover:text-green-600 transition-all"
                                >
                                    Privacy Policy
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/refund"
                                    className="hover:text-green-600 transition-all"
                                >
                                    Refund Policy
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/faq"
                                    className="hover:text-green-600 transition-all"
                                >
                                    FAQs
                                </NavLink>
                            </li>

                        </ul>

                    </div>

                    <div>

                        <h2 className="text-xl font-bold mb-5">
                            Contact Us
                        </h2>

                        <div className="space-y-4 text-gray-600">

                            <div className="flex items-center gap-3">

                                <MdPhone className="text-green-600 text-xl" />

                                <p>
                                    +91 9876543210
                                </p>

                            </div>

                            <div className="flex items-center gap-3">

                                <MdEmail className="text-green-600 text-xl" />

                                <p>
                                    support@freshmart.com
                                </p>

                            </div>

                            <div className="mt-6">

                                <p className="font-semibold mb-4">
                                    Download App
                                </p>

                                <div className="flex gap-3 flex-wrap">

                                    <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl hover:scale-105 transition-all">

                                        <FaApple className="text-xl" />

                                        App Store

                                    </button>

                                    <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl hover:scale-105 transition-all">

                                        <FaGooglePlay />

                                        Play Store

                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* BOTTOM */}
                <div className="border-t mt-10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">

                    <p className="text-gray-600 text-sm text-center sm:text-left">
                        © 2026 FreshMart. All Rights Reserved.
                    </p>

                    <p className="text-gray-600 text-sm">
                        Made with ❤️ using React & Tailwind CSS
                    </p>

                </div>

            </div>

        </footer>

    );

};

export default Footer;