import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import Home from "./pages/Home";
import AllItems from "./pages/AllItems";
import Delivery from "./pages/Delivery";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <Navbar setIsOpen={setIsOpen} />
      <CartSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<AllItems />} />
        <Route path="/items/:category" element={<AllItems />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="*" element={<Home />} />
        <Route path="/help" element={<div>Help Center</div>} />
        <Route path="/terms" element={<div>Terms & Conditions</div>} />
        <Route path="/privacy" element={<div>Privacy Policy</div>} />
        <Route path="/refund" element={<div>Refund Policy</div>} />
        <Route path="/faq" element={<div>FAQ Page</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
