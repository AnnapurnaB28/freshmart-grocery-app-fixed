import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*\d).{6,}$/;

        if (!emailRegex.test(email)) { alert("Invalid Email Format"); return; }
        if (!passwordRegex.test(password)) { alert("Password must be minimum 6 characters and contain 1 number"); return; }

        const data = await fetch("/db.json").then(r => r.json());
        const user = (data.users || []).find(u => u.email === email);
        if (!user) { alert("Email does not exist"); return; }
        if (user.password !== password) { alert("Wrong Password"); return; }
        alert("Login Successful");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-lg w-[350px]">
                <h1 className="text-3xl font-bold text-center mb-6 text-green-600">Login</h1>
                <input type="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border p-3 rounded-lg mb-4 outline-none" required />
                <input type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border p-3 rounded-lg mb-4 outline-none" required />
                <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg">Login</button>
            </form>
        </div>
    );
};

export default Login;
