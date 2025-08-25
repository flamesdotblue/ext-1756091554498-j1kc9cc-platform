import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Hello World',
  description: 'Simple Hello World server with Next.js and Tailwind',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
