import { Link } from 'react-router-dom';
import Button from '../common/Button';

export default function Navbar() {
    const contactButton= { label: 'Contact Us', to: '/contact' };
    return (
        <header className="shadow-lg">
            <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4">
                <Link to="/" className="inline-flex items-center gap-2 font-bold">
                    <span><img src="/src/assets/logo.png" alt="Xylochat" className="h-8 w-8" /></span>
                    <span className="text-lg font-extrabold">Xylochat</span>
                </Link>
                <Button to={contactButton.to}>
                    {contactButton.label}
                </Button>
            </nav>
        </header>
    );
}

