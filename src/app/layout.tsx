import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const yekan = localFont({ src: '../../public/yekan.ttf' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <div className="page-container">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;