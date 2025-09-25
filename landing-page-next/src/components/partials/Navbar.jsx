import Link from 'next/link';
import Image from 'next/image';
import Button from '../common/Button';

export default function Navbar() {
    const contactButton= { label: 'Contact Us', to: '/contact' };
    return (
        <header className="shadow-lg">
            <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4">
                <Link href="/" className="inline-flex items-center gap-2 font-bold">
                    <span><Image src="/logo.png" alt="Xylochat" width={32} height={32} className="h-8 w-8" /></span>
                    <span className="text-lg font-extrabold">Xylochat</span>
                </Link>
                <Button to={contactButton.to}>
                    {contactButton.label}
                </Button>
            </nav>
        </header>
    );
}

