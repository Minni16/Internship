import Navbar from '../components/partials/Navbar';
import Footer from '../components/partials/Footer';
import { Outlet } from 'react-router-dom';

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}