import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'nextjs-14-shadcn-ui-tailwind-sandbox-js',
  description: 'Next.js 14, Shadcn UI, and Tailwind CSS Sandbox',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
