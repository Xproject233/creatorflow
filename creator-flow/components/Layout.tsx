import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto">
          <h1 className="text-xl font-bold">CreatorFlow</h1>
          {/* Add navigation links here if needed */}
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-200 text-center p-4">
        <p>&copy; {new Date().getFullYear()} CreatorFlow. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
