import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navigation from '@/_components/Navigation';

const yekan = localFont({ src: '../../public/yekan.ttf' });
const iranSans = localFont({ src: '../../public/iranSans.ttf' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

interface Props {
  children: React.ReactNode;
  // cv: React.ReactNode;
  // aboutme: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="fa" dir="rtl">
      <body className={iranSans.className}>
        <div className="my-1 bg-gray-50 overflow-hidden min-h-screen">
          <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
            <Navigation />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
