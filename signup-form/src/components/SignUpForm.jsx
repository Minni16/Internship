import React, { useState } from 'react';

const SignUpForm = ({onShowList}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // stops the default form reload

        if (!email || !password || !confirmPassword) {
            alert("⚠️ All fields are required!");
            return;
        }

        if (password.length < 6) {
            alert("🔑 Password must be at least 6 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            alert("❌ Passwords do not match!");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("📧 Please enter a valid email address.");
            return;
        }

        // Step 1: Fetch existing users from localStorage
        let users = localStorage.getItem("users");
        users = users ? JSON.parse(users) : [];

        // check if user already exists
        const existingUser = users.find((user) => user.email === email);
        if (existingUser) {
            alert("🚫 User already registered with this email!");
            return;
        }

        // Step 2: Create new user object
        const newUser = { name, email, password };

        // Step 3: Push new user into array
        users.push(newUser);

        // Step 4: Save back to localStorage
        localStorage.setItem("users", JSON.stringify(users));

        alert("User registered successfully!");
        console.log("All users:", users);

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-2xl shadow-lg flex p-10 w-full max-w-4xl">
                <div className="flex-1 flex flex-col justify-center pr-10">
                    <h2 className="text-3xl font-bold mb-8 text-center">Sign up</h2>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="flex items-center">
                            <span className="text-xl mr-3">
                                <i className="fa fa-user"></i>
                            </span>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your Name"
                                className="w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 px-3"
                            />
                        </div>
                        <div className="flex items-center">
                            <span className="text-xl mr-3">
                                <i className="fa fa-envelope"></i>
                            </span>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email"
                                className="w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 px-3"
                            />
                        </div>
                        <div className="flex items-center">
                            <span className="text-xl mr-3">
                                <i className="fa fa-lock"></i>
                            </span>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 px-3"
                            />
                        </div>
                        <div className="flex items-center">
                            <span className="text-xl mr-3">
                                <i className="fa fa-key"></i>
                            </span>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Repeat your password"
                                className="w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 px-3"
                            />
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="terms" className="mr-2" />
                            <label htmlFor="terms" className="text-gray-700">
                                I agree all statements in <a href="#" className="text-blue-600 hover:underline">Terms of service</a>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-1/2 mx-auto py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition flex justify-center items-center"
                        >
                            REGISTER
                        </button>
                    </form>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div>
                        <img
                            src="/image.jpg"
                            alt="Sign Up"
                            className="max-w-full h-auto"
                        />
                        <button
                            onClick={onShowList}
                            type="submit"
                            className="w-1/2 mx-auto py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition flex justify-center items-"
                        >
                            User List
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;