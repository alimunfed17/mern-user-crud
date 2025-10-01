import React, { useState, useEffect } from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className={`fixed top-0 left-0 w-full transition-transform duration-300 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Header />
      </div>

      <main className="flex-1 pt-24 overflow-auto container mx-auto px-4">
      <p className='text-center bg-red-500 text-gray-600'>NOTE: <span className='text-white'>This project / app is deployed on Render & free tier. <br/>So, It might take a few minutes to run the app. The backend is live on this </span><a className='text-blue-600 underline' href="https://mern-user-crud.onrender.com/">link</a>.</p>
        {children}
      </main>
    </div>
  );
};

export default Layout;
