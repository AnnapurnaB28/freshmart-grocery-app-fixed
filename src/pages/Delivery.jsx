import React, { useState } from "react";

const Delivery = () => {

    const [slot, setSlot] = useState("");

    const slots = [
        "8 AM - 10 AM",
        "10 AM - 12 PM",
        "2 PM - 4 PM",
        "6 PM - 8 PM"
    ];

    return (
        <div className="container mx-auto px-4 py-6">

            <h1 className="text-3xl font-bold mb-6">
                Select Delivery Slot
            </h1>

            <div className="grid gap-4">

                {slots.map((time) => (

                    <button
                        key={time}
                        onClick={() => setSlot(time)}
                        className={`p-4 rounded-xl border text-left ${slot === time
                            ? "bg-green-500 text-white"
                            : "bg-white"
                            }`}
                    >
                        {time}
                    </button>

                ))}

            </div>

            {slot && (
                <div className="mt-6 bg-green-100 p-4 rounded-xl">
                    Selected Slot: {slot}
                </div>
            )}

        </div>
    );
};

export default Delivery;