'use client'; // Keep if any client-side interactions are planned, not strictly needed for this static content

import Link from 'next/link'; // For the 'Get Started' button

export default function HomePage() {
  return (
    // Main container for the page, aiming for full viewport height if content is short
    // Using a purple gradient background as preferred
    <div className="min-h-[calc(100vh-var(--header-height,80px))] flex flex-col justify-center items-center text-white bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 px-4 sm:px-6 lg:px-8">
      {/* Adjust min-h if header height is different or handle dynamically.
          Assuming header is roughly 80px. Or remove if full screen bg isn't desired under nav.
          For a simpler approach that fills screen below nav:
          <div className="flex-grow flex flex-col justify-center items-center text-white bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 px-4 sm:px-6 lg:px-8">
          This assumes Layout.tsx's main tag handles the flex-grow properly.
          Let's use a simpler approach by not calculating header height here, assuming the main layout handles it.
      */}

      <div className="flex-grow flex flex-col justify-center items-center text-center py-12"> {/* Centering content */}
        <div className="max-w-3xl mx-auto"> {/* Constrain width for readability */}
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Meet Your All-in-One Creator Platform
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl md:text-2xl text-purple-200 mb-10">
            Launch your courses, digital products, and services all in one place.
          </p>

          {/* Call to Action Button */}
          <Link
            href="/auth/signin"
            className="bg-white text-purple-700 font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-lg text-lg sm:text-xl hover:bg-purple-100 transition duration-300 ease-in-out shadow-lg transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        {/* Image Placeholder Section */}
        <div className="mt-16 w-full max-w-2xl">
          <div className="bg-purple-500/30 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-purple-400/50">
            <p className="text-xl text-center text-purple-200">
              App Preview Mockup / Dashboard UI Placeholder
            </p>
            {/* You could add a simple SVG or more detailed placeholder structure here */}
            <div className="mt-4 h-64 bg-purple-400/40 rounded-lg flex items-center justify-center">
              <svg className="w-16 h-16 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
