import Button from '../../common/Button';

export default function Contact() {
    const contactUsButton = { label: 'Contact Us', to: '/contact-us' };
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-4 md:py-8 text-center">

            <h1 className="max-w-2xl mx-auto font-bold text-3xl mb-6">
                Ready to Transform Your Communication?
            </h1>

            <p className="mb-6 text-slate-600 text-lg md:text-xl font-medium text-center">Join us to integrated secure, branded chat into your software. See why Xylochat is the preferred choice for enterprises who refuse to compromise.</p>

            <div className="flex justify-center">
                <Button to={contactUsButton.to}>
                    {contactUsButton.label}<i className="fa-solid fa-arrow-right ml-2"></i>
                </Button>
            </div>
        </section>
    );
}

// lg md sm

