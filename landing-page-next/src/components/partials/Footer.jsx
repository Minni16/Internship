import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {

    const footerColumns = [
        {
            heading: 'Company',
            links: [
                { label: 'About Us', to: '/#about' },
                { label: 'Features', to: '/#features' },
                { label: 'Partner', to: '/#partners' },
            ],
        },
    ];

    return (
        <footer className="mt-auto footer-bg text-white text-center md:text-left">
            <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-3">
                <div>
                    <div className="inline-flex items-center gap-2">
                        <Image src="/logo.png" alt="Xylochat" width={40} height={40} className="h-10 w-10" />
                        <span className="text-2xl font-extrabold">Xylochat</span>
                    </div>
                    <p className="mt-4 text-slate-400">Enterprise Communication Solutions.</p>
                </div>

                {footerColumns.map((col) => (
                    <div key={col.heading}>
                        <div className="mb-2 font-semibold mb-4">{col.heading}</div>
                        <ul className="grid gap-2">
                            {col.links.map((l) => (
                                <li key={l.label}>
                                    <Link href={l.to} className="text-slate-400 transition-colors hover:text-slate-50">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div>
                    <div className="mb-2 font-semibold mb-4">Contact Us</div>
                    <div className="text-slate-400">
                        Xylochat@gmail.com
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-screen-xl px-4 py-6 text-sm text-slate-400 grid grid-cols-1 md:grid-cols-3 gap-4">
                <span className='inline-flex items-center justify-center md:justify-start'>© 2025 Xylochat. All rights reserved.</span>

                <span className="inline-flex items-center gap-2 justify-center w-full md:text-center">
                    Product of
                    <Image src="/ktmbees.png" alt="KtmBees" width={40} height={40} />
                    KtmBees
                </span>

                <span className="flex justify-center items-center md:justify-end">
                    <a href="https://www.linkedin.com">
                        <Image src="/linkedin.png" alt="LinkedIn" width={80} height={80} />
                    </a>
                </span>
            </div>
        </footer>
    );
}

