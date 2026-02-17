import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['700'],
});

export const metadata: Metadata = {
  title: 'Mundo Pet',
  description:
    'Aqui você pode ver todos os clientes e serviços agendados para hoje.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${interTight.variable} antialiased`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
};

export default RootLayout;
