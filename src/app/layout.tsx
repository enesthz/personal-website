import type { Metadata } from 'next';
import './global.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Enes Taha Öz | Junior Frontend Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
