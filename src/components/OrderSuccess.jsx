import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const OrderSuccess = ({
    formData,
    setIsOpen,
    setOrderSuccess,
    setShowCheckout
}) => {

    return (

        <div className="flex flex-col items-center justify-center h-[80vh] px-5 text-center">

            <FaCheckCircle className="text-green-500 text-7xl mb-5 animate-bounce" />

            <h2 className="text-3xl font-bold mb-3">
                Order Confirmed 🎉
            </h2>

            <p className="text-gray-600 mb-3">
                Thank you for shopping with us.
            </p>

            <p className="font-semibold">
                Delivery Slot:
            </p>

            <p className="text-green-600 mb-5">
                {formData.slot}
            </p>

            <button
                onClick={() => {

                    setIsOpen(false);

                    setOrderSuccess(false);

                    setShowCheckout(false);

                }}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl"
            >
                Continue Shopping
            </button>

        </div>

    );

};

export default OrderSuccess;