import { useState } from 'react';
import Button from '../../common/Button';

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [isOpen, setIsOpen] = useState(false);

    const contactUsButton = { label: 'Contact Us' };

    const handleSubmit = (event) => {
        event.preventDefault(); // stops the default form reload

        if (!name || !email || !message) {
            alert("⚠️ All fields are required!");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("📧 Please enter a valid email address.");
            return;
        }

        const users = { name, email, message };

        alert("🎉 Message sent successfully!");
        console.log("All users:", users);

        setName("");
        setEmail("");
        setMessage("");

        // setIsOpen(false);
    };
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-4 md:py-8 text-center">

            <h1 className="max-w-2xl mx-auto font-bold text-3xl mb-6">
                Ready to Transform Your Communication?
            </h1>

            <p className="mb-6 text-slate-600 text-lg md:text-xl font-medium text-center">Join us to integrated secure, branded chat into your software. See why Xylochat is the preferred choice for enterprises who refuse to compromise.</p>

            <div className="flex justify-center">
                <Button onClick={() => setIsOpen(true)}>
                    {contactUsButton.label}<i className="fa-solid fa-arrow-right ml-2"></i>
                </Button>
            </div>

            {/* Popup (Modal) */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                    <div className="bg-white p-6 rounded-xl shadow-lg w-1/3">
                        <div className='flex justify-end'>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 cursor-pointer"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <h2 className="text-xl font-bold my-4">Contact Us</h2>
                        <p className='mb-8'>Have questions about our services or want to explore a partnership? Reach out and our team will get back to you as soon as possible.</p>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="text-left">
                                <p>Name</p>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Ktmbees Private Limited"
                                    className="w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 px-3"
                                />
                            </div>
                            <div className="text-left">
                                <p>Email</p>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Ktmbees Private Limited"
                                    className="w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 px-3"
                                />
                            </div>
                            <div className="text-left">
                                <p>Message</p>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Ktmbees Private Limited"
                                    rows={4}
                                    className="w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 px-3"
                                />
                            </div>

                            <Button
                                type='submit'
                                onClick={() => setIsOpen(true)}
                            >
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            )}

            <p className="my-8 text-slate-500 text-sm">Setup in minutes • Enterprise support included</p>
        </section>
    );
}

