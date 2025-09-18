import React, { use } from 'react';
import { useForm, Controller } from "react-hook-form";

const SignUpForm = ({ onShowList }) => {
    const {
        control,
        handleSubmit,
        reset,
        watch,
        getValues,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            termsAccepted: false,
        },
    });

    const onSubmit = (data) => {
        const { name, email, password, confirmPassword, termsAccepted } = data;

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

        reset();
    };

    console.log(errors);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-2xl shadow-lg flex p-10 w-full max-w-4xl">
                <div className="flex-1 flex flex-col justify-center pr-10">
                    <h2 className="text-3xl font-bold mb-8 text-center">Sign up</h2>
                    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex items-center">
                            <span className="text-xl mr-3">
                                <i className="fa fa-user"></i>
                            </span>

                            <Controller
                                name="name"
                                control={control}
                                rules={{ required: "Name is required." }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 px-3"
                                    />
                                )}
                            />
                        </div>
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                        <div className="flex items-center">
                            <span className="text-xl mr-3">
                                <i className="fa fa-envelope"></i>
                            </span>
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: "Email is required.",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "📧 Please enter a valid email address."
                                    }
                                }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 px-3"
                                    />
                                )}
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                        <div className="flex items-center">
                            <span className="text-xl mr-3">
                                <i className="fa fa-lock"></i>
                            </span>
                            <Controller
                                name="password"
                                control={control}
                                rules={{
                                    required: "Password is required.",
                                    minLength: { value: 8, message: "🔑 Password must be at least 8 characters long." }
                                }}


                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="password"
                                        placeholder="Password"
                                        className="w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 px-3"
                                    />
                                )}
                            />
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                        <div className="flex items-center">
                            <span className="text-xl mr-3">
                                <i className="fa fa-key"></i>
                            </span>
                            <Controller
                                name="confirmPassword"
                                control={control}
                                rules={{
                                    required: "Confirm Password is required.",
                                    validate: (value) => value === getValues("password") || "🔑 Passwords do not match."
                                }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="password"
                                        placeholder="Repeat your password"
                                        className="w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 px-3"
                                    />
                                )}
                            />
                        </div>
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}

                        <div className="flex items-center">
                            <Controller
                                name="termsAccepted"
                                control={control}
                                rules={{ required: "You must accept terms" }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="checkbox"
                                        checked={field.value}
                                        className="mr-2"
                                    />
                                )}
                            />
                            <label className="text-gray-700">
                                I agree all statements in{" "}
                                <a href="#" className="text-blue-600 hover:underline">
                                    Terms of service
                                </a>
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
                            type="button"
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