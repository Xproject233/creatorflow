import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";
import { AuthProvider } from "../components/AuthContext"; // Import AuthProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CreatorFlow",
  description: "The ultimate platform to streamline your content creation workflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider> {/* Wrap with AuthProvider */}
          <Layout>{children}</Layout>
        </AuthProvider>
      </body>
    </html>
  );
}
