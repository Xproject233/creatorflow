'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from './AuthContext';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, signOut, loading } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4"> {/* Retain existing header style or update as needed */}
        <nav className="container mx-auto flex justify-between items-center">
          {/* Logo/Site Title on the far left */}
          <Link href="/" className="text-xl font-bold">
            CreatorFlow
          </Link>

          {/* Navigation links on the far right */}
          <div className="flex items-center space-x-4">
            {loading ? (
              <p className="text-sm">Loading...</p> // Adjusted loading text style
            ) : user ? (
              <>
                <span className="text-sm hidden sm:inline">Welcome, {user.email}</span> {/* Hide on small screens if too crowded */}
                <button
                  onClick={async () => {
                    await signOut();
                    // Consider router.push('/') or similar if staying on a protected page after signout causes issues
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/signin" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </Link>
                <Link href="/auth/signin" className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-200 text-center p-4 mt-auto"> {/* Ensure footer is at the bottom */}
        <p>&copy; {new Date().getFullYear()} CreatorFlow. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
