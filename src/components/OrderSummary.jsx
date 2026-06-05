import React from "react";

const OrderSummary = ({
    cartItems,
    total
}) => {

    return (

        <div className="bg-gray-100 rounded-xl p-4 mt-5">

            <h2 className="text-xl font-bold mb-3">
                Order Summary
            </h2>

            <div className="space-y-2">

                {
                    cartItems.map((item) => (

                        <div
                            key={item.id}
                            className="flex justify-between"
                        >

                            <span>
                                {item.name} x {item.quantity}
                            </span>

                            <span>
                                ₹{item.price * item.quantity}
                            </span>

                        </div>

                    ))
                }

            </div>

            <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">

                <span>Total</span>

                <span className="text-green-600">
                    ₹{total}
                </span>

            </div>

        </div>

    );

};

export default OrderSummary;