import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col m-0">
      <Header />
      <main className="flex-1 container py-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
