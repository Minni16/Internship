import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import Landing from './pages/Landing';
import ContactUs from './pages/ContactUs';

const router = createBrowserRouter([
  {
    element: <HomeLayout />, 
    children: [
      { path: '/', element: <Landing /> },
      { path: '/contact', element: <ContactUs /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}