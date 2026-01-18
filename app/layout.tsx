import './globals.css';
import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import { BaseLayout } from '../design-system/layouts/BaseLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'US-OS Vayan Global',
  description: 'Unified global sector operating system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <BaseLayout>
            {children}
          </BaseLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
