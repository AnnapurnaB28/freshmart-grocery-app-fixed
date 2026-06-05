import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { GrFormNextLink } from "react-icons/gr";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";
import OrderSuccess from "./OrderSuccess";
import { useCart } from "../context/CartContext";

const CartSidebar = ({ isOpen, setIsOpen }) => {
    const { cartItems, total, increaseQty, decreaseQty, deleteItem, clearCart } = useCart();
    const [showCheckout, setShowCheckout] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [formData, setFormData] = useState({ username: "", phone: "", address: "", slot: "" });

    useEffect(() => {
        if (!isOpen) setShowCheckout(false);
    }, [isOpen]);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const placeOrder = () => {
        if (!formData.username || !formData.phone || !formData.address || !formData.slot) {
            alert("Please fill all details");
            return;
        }
        clearCart();
        alert("🎉 Your Order is Successful!");
        setOrderSuccess(true);
    };

    return (
        <>
            {isOpen && (
                <div onClick={() => { setIsOpen(false); setShowCheckout(false); }} className="fixed inset-0 bg-black/40 z-40"></div>
            )}
            <div className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-2xl z-50 transition-all duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex items-center justify-between p-5 border-b">
                    <h2 className="text-2xl font-bold">{showCheckout ? "Checkout" : "My Cart"}</h2>
                    <button onClick={() => { setIsOpen(false); setShowCheckout(false); }}>
                        <RxCross2 className="text-3xl" />
                    </button>
                </div>

                {orderSuccess ? (
                    <OrderSuccess formData={formData} setIsOpen={setIsOpen} setOrderSuccess={setOrderSuccess} setShowCheckout={setShowCheckout} />
                ) : showCheckout ? (
                    <CheckoutForm formData={formData} handleChange={handleChange} cartItems={cartItems} total={total} placeOrder={placeOrder} />
                ) : (
                    <>
                        <h2 className="text-xl font-bold flex items-center justify-center py-3">Free Delivery in 15 min 🚀</h2>
                        <div className="p-4 space-y-4 overflow-y-auto h-[70vh]">
                            {cartItems.length === 0 ? (
                                <img className="animate-pulse" src="https://img.freepik.com/premium-vector/shopping-woman-with-cart_165488-4268.jpg" alt="empty-cart" />
                            ) : (
                                cartItems.map(item => (
                                    <CartItem key={item.id} item={item} increaseQty={increaseQty} decreaseQty={decreaseQty} deleteItem={deleteItem} />
                                ))
                            )}
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-5 border-t bg-white">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold">Total</h2>
                                <h2 className="text-xl font-bold text-green-600">₹{total}</h2>
                            </div>
                            <button onClick={() => setShowCheckout(true)} className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                                Next <GrFormNextLink className="text-2xl ml-3" />
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default CartSidebar;
