import { Outlet } from 'react-router-dom';
import Backdrop from './Backdrop';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Backdrop />
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main"><Outlet /></main>
      <Footer />
    </>
  );
}
