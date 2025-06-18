'use client';

import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthContext'; // Adjust path if AuthContext is elsewhere

type AuthGuardProps = {
  children: ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const { user, loading, session } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Wait until loading is false to make a decision
    if (!loading) {
      // If no user and no session, redirect to sign-in
      if (!user && !session) {
        router.replace('/auth/signin');
      }
    }
  }, [user, session, loading, router]);

  // If loading, or no user/session yet (and not yet redirected), show a loading indicator
  if (loading || (!user && !session)) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading authentication state...</p>
      </div>
    );
  }

  // If user is authenticated, render the children
  return <>{children}</>;
}
