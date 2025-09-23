import React from 'react';
import { useForm, Controller, useFieldArray } from "react-hook-form";

const SignUpForm = ({ onShowList }) => {
    const {
        control,
        handleSubmit,
        reset,
        watch,
        getValues,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            gender: "",
            hasPhone: "false",
            phoneNumbers: [
                {
                    phoneNumber: ""
                }
            ],
            hobbies: [],
            email: "",
            password: "",
            confirmPassword: "",
            isHuman: "",
            termsAccepted: false,
        },
    });

    // fields array for phone numbers
    const { fields, append, remove } = useFieldArray({
        name: "phoneNumbers",
        control,
        rules: {
            required: "Please add at least 1 phone number"
        }
    });

    // paxi feri feri use garna lai agari define gardeko
    const watchHasPhone = watch("hasPhone");

    const onSubmit = (data) => {
        const { name, gender, hasPhone, phoneNumbers, hobbies, email, password, confirmPassword, isHuman, termsAccepted } = data;

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
        const newUser = { name, gender, hasPhone, phoneNumbers, hobbies, email, password, isHuman, termsAccepted };

        // Step 3: Push new user into array
        users.push(newUser);

        // Step 4: Save back to localStorage
        localStorage.setItem("users", JSON.stringify(users));

        alert("User registered successfully!");
        console.log("All users:", users);

        reset();
    };
    
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-2xl shadow-lg flex p-10 w-full max-w-4xl">
                <div className="flex-1 flex flex-col justify-center pr-10">
                    <h2 className="text-3xl font-bold mb-8 text-center">Sign up</h2>
                    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex items-center">
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
                            <Controller
                                name="gender"
                                control={control}
                                rules={{ required: "Gender is required." }}
                                render={({ field }) => (
                                    <>
                                        <input
                                            {...field}
                                            type="radio"
                                            value="female"
                                            className="ml-1"
                                        />
                                        <label className="ml-1 px-2">Female</label>
                                        <br />
                                        <input
                                            {...field}
                                            type="radio"
                                            value="male"
                                            className="ml-8"
                                        />
                                        <label className="ml-1 px-2">Male</label>
                                        <br />
                                        <input
                                            {...field}
                                            type="radio"
                                            value="others"
                                            className="ml-8"
                                        />
                                        <label className="ml-1 px-2">Others</label>
                                    </>
                                )}
                            />
                        </div>
                        {errors.hasPhone && <p className="text-red-500 text-sm">{errors.hasPhone.message}</p>}

                        <div className="flex items-center">
                            <Controller
                                name="hasPhone"
                                control={control}
                                rules={{ required: "Phone number status is required." }}
                                render={({ field }) => (
                                    <>
                                        <input
                                            {...field}
                                            type="radio"
                                            value="true"
                                            checked={field.value === "true"}
                                            className="ml-1"
                                        />
                                        <label className="ml-1 px-2">Has phone number</label>
                                        <br />
                                        <input
                                            {...field}
                                            type="radio"
                                            value="false"
                                            checked={field.value === "false"}
                                            className="ml-8"
                                        />
                                        <label className="ml-1 px-2">No phone number</label>
                                    </>
                                )}
                            />
                        </div>
                        {errors.hasPhone && <p className="text-red-500 text-sm">{errors.hasPhone.message}</p>}

                        {watchHasPhone === "true" && (
                            <>
                                {/* fields.map le sabai phone number ko input field loop garera dekhauxa */}
                                {fields.map((item, index) => (
                                    <div className="flex">
                                        <div>
                                            <Controller
                                                name={`phoneNumbers.${index}.phoneNumber`}
                                                control={control}
                                                rules={{ required: "Phone number is required." }}
                                                render={({ field }) => (
                                                    <input
                                                        {...field}
                                                        type="text"
                                                        placeholder="Your Phone Number"
                                                        className="w-80 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 px-3"
                                                    />
                                                )}
                                            />
                                        </div>
                                        <button className="w-1/10 mx-auto py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition"
                                            type="button"
                                            onClick={() => {
                                                remove({ phoneNumber: index });
                                            }}
                                        >
                                            x
                                        </button>
                                    </div>
                                ))}
                                <button className="w-1/6 mx-auto py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition flex justify-center items-center"
                                    type="button"
                                    onClick={() => {
                                        append({ phoneNumber: "" });
                                    }}
                                >
                                    Add
                                </button>
                            </>
                        )}
                        {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}

                        <div className="block">
                            <label className="text-gray-700 font-semibold mb-2">Hobbies:</label>
                            <br />
                            <Controller
                                name="hobbies"
                                control={control}
                                defaultValue={[]}
                                rules={{ required: "You must select at least one hobby" }}
                                render={({ field }) => {
                                    const hobbiesList = [
                                        "Blogging",
                                        "Cooking & Baking",
                                        "Gaming",
                                        "Music & Art",
                                        "Reading & Researching",
                                        "Travel",
                                    ];
                                    return (
                                        <>
                                            {hobbiesList.map((hobby) => (
                                                <div key={hobby}>
                                                    <input
                                                        type="checkbox"
                                                        value={hobby}
                                                        checked={field.value?.includes(hobby) || false}
                                                        onChange={(e) => {
                                                            // if checked, add to array; if unchecked, remove from array
                                                            if (e.target.checked) {
                                                                field.onChange([...(field.value || []), hobby]);
                                                            } else {
                                                                field.onChange(field.value.filter((val) => val !== hobby));
                                                            }
                                                        }}
                                                        className="mr-2"
                                                    /><label className="text-gray-700">{hobby}</label>
                                                </div>
                                            ))}
                                        </>
                                    )
                                }}
                            />
                        </div>

                        <div className="flex items-center">
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
                            <label>Are you a human?</label>
                            <Controller
                                name="isHuman"
                                control={control}
                                rules={{ required: "Question is required." }}
                                render={({ field }) => (
                                    <>
                                        <select
                                            {...field}
                                            value={field.value}
                                            className="ml-1"
                                        >
                                            <option value="" disabled>Select an option</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </>
                                )}
                            />
                        </div>
                        {errors.hasPhone && <p className="text-red-500 text-sm">{errors.hasPhone.message}</p>}

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
                            className="w-1/2 mx-auto py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition flex justify-center items-center"
                        >
                            User List
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SignUpForm;