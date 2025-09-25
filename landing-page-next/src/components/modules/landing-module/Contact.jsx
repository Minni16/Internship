import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import Button from '../../common/Button';

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    const [isConfirmation, setIsConfirmation] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: { name: '', email: '', message: '' }
    });

    const contactUsButton = { label: 'Contact Us' };

    const onSubmit = (data) => {
        console.log("All users:", data);
        reset();
        setIsOpen(false);
        setIsConfirmation(true);
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
                    <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] md:w-1/2">
                        <div className='flex justify-end'>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 cursor-pointer"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <h2 className="text-xl font-bold my-4">Contact Us</h2>
                        <p className='mb-8 text-gray-600 text-xs md:text-base'>Have questions about our services or want to explore a partnership? Reach out and our team will get back to you as soon as possible.</p>

                        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                            <div className="text-left">
                                <p>Name</p>
                                <input
                                    type="text"
                                    {...register('name', { required: 'Name is required' })}
                                    className="w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 px-3"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                                )}
                            </div>
                            <div className="text-left">
                                <p>Email</p>
                                <input
                                    type="email"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Please enter a valid email address'
                                        }
                                    })}
                                    className="w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 px-3"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                )}
                            </div>
                            <div className="text-left">
                                <p>Message</p>
                                <textarea
                                    {...register('message', { required: 'Message is required' })}
                                    rows={4}
                                    className="w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 px-3"
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                                )}
                            </div>

                            <Button
                                type='submit'
                            >
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            )}

            {isConfirmation && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                    <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] md:w-1/2">
                        <div className='flex justify-end'>
                            <button
                                onClick={() => setIsConfirmation(false)}
                                className="text-gray-500 cursor-pointer"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <h2 className="text-xl font-bold my-4">Contact Us</h2>
                        <p className='mb-8 font-medium text-gray-600 text-xs md:text-base'>Have questions about our services or want to explore a partnership? Reach out and our team will get back to you as soon as possible.</p>

                        <div className='flex justify-center mb-4'>
                            <Image src="/confirm.png" alt="Confirmation" width={150} height={150} className='text-center object-contain' />
                        </div>

                        <p className='mb-8 text-base md:text-2xl font-semibold text-gray-600'>Thank you! We appreciate your message and will connect with you soon.</p>

                        <Button
                            type='submit'
                            onClick={() => setIsConfirmation(false)}
                        >
                            Back to Homepage
                        </Button>

                    </div>
                </div>
            )}

            <p className="my-8 text-slate-500 text-sm">Setup in minutes • Enterprise support included</p>
        </section>
    );
}

