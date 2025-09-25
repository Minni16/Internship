import Navbar from '../components/partials/Navbar';
import Footer from '../components/partials/Footer';

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}