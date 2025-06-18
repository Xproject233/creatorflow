'use client'; // Required because we are using hooks like useAuth

import React from 'react';
import Link from 'next/link'; // Import Link for navigation
import { useAuth } from './AuthContext'; // Assuming AuthContext is in the same directory or ./AuthContext

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, signOut, loading } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold"> {/* Make title a link to home */}
            CreatorFlow
          </Link>
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : user ? (
              <>
                <span className="mr-4">Welcome, {user.email}</span>
                <button
                  onClick={async () => {
                    await signOut();
                    // Router push or refresh might be needed if Next.js cache doesn't update UI
                    // For now, onAuthStateChange in AuthContext should handle UI update
                  }}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link href="/auth/signin" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Sign In
              </Link>
            )}
          </div>
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
