'use client';

import React from 'react';
import AuthGuard from '../../components/AuthGuard'; // Adjust path as needed
import { useAuth } from '../../components/AuthContext'; // For displaying user info

export default function DashboardPage() {
  const { user } = useAuth(); // Get user info to display

  return (
    <AuthGuard>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Welcome to your Dashboard
            {user?.email ? `, ${user.email}` : ''}!
          </h2>
          <p className="text-gray-700">
            This is a protected area. Only authenticated users can see this.
          </p>
          {user && (
            <div className="mt-4 p-4 bg-gray-100 rounded break-all">
              <p className="text-sm"><strong>User ID:</strong> {user.id}</p>
              <p className="text-sm"><strong>User AUD:</strong> {user.aud}</p>
              {/* aud usually shows 'authenticated', use session.expires_at for actual expiry */}
            </div>
          )}
        </div>
      </div>
    </AuthGuard>
  );
}
