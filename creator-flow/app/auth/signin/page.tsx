'use client';

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../../../lib/supabase';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../components/AuthContext';
import { useEffect } from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function SignInPage() {
  const router = useRouter();
  const { session, loading } = useAuth();

  useEffect(() => {
    if (!loading && session) {
      router.replace('/dashboard');
    }
  }, [session, loading, router]);

  if (loading || session) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign In to CreatorFlow</h2>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['google']}
          redirectTo={`${siteUrl}/dashboard`} // Redirect to dashboard after successful OAuth or magic link click
          magicLink
        />
      </div>
    </div>
  );
}
