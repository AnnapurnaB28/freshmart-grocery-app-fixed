import React from "react";
import { MdDelete } from "react-icons/md";

const CartItem = ({
    item,
    increaseQty,
    decreaseQty,
    deleteItem
}) => {

    return (

        <div className="border rounded-xl p-3 flex gap-3">

            <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain"
            />

            <div className="flex-1">

                <h3 className="font-semibold">
                    {item.name}
                </h3>
                <p className="text-gray-500 text-sm">
                    {item.unit}
                </p>

                <p className="text-green-600 font-bold">
                    ₹{item.price}
                </p>

                <div className="flex items-center gap-3 mt-3">

                    <button
                        onClick={() => decreaseQty(item)}
                        className="bg-gray-200 px-3 py-1 rounded"
                    >
                        -
                    </button>

                    <span>
                        {item.quantity}
                    </span>

                    <button
                        onClick={() => increaseQty(item)}
                        className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                        +
                    </button>

                </div>

            </div>

            <button
                onClick={() => deleteItem(item.id)}
            >

                <MdDelete className="text-2xl text-red-500" />

            </button>

        </div>

    );

};

export default CartItem;