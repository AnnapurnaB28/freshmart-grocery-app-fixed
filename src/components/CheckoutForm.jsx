import React from "react";
import OrderSummary from "./OrderSummary";

const CheckoutForm = ({
    formData,
    handleChange,
    cartItems,
    total,
    placeOrder
}) => {

    return (

        <div className="p-5 overflow-y-auto h-[85vh]">

            <div className="space-y-4">

                <div>

                    <label className="font-semibold">
                        Full Name
                    </label>

                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your name"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                </div>

                <div>

                    <label className="font-semibold">
                        Phone Number
                    </label>

                    <input
                        type="number"
                        name="phone"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                </div>

                <div>

                    <label className="font-semibold">
                        Delivery Address
                    </label>

                    <textarea
                        name="address"
                        placeholder="Enter address"
                        value={formData.address}
                        onChange={handleChange}
                        rows="4"
                        className="w-full border rounded-xl p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    ></textarea>

                </div>

                <div>

                    <label className="font-semibold">
                        Delivery Slot
                    </label>

                    <select
                        name="slot"
                        value={formData.slot}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >

                        <option value="">
                            Select Slot
                        </option>

                        <option>
                            8 AM - 10 AM
                        </option>

                        <option>
                            10 AM - 12 PM
                        </option>

                        <option>
                            1 PM - 3 PM
                        </option>

                        <option>
                            4 PM - 6 PM
                        </option>

                    </select>

                </div>


                <OrderSummary
                    cartItems={cartItems}
                    total={total}
                />


                <button
                    onClick={placeOrder}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold mt-5"
                >
                    Confirm Order
                </button>

            </div>

        </div>

    );

};

export default CheckoutForm;