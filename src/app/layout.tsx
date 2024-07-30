import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReactQueryProvider from './providers/ReactQueryProvider';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-between border-b border-[#334155] px-8 py-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              width={165}
              height={100}
              alt="Logo neuralmed"
            />
          </Link>
          <div className="flex items-center gap-4">
            <div>
              <p>Usuário de Teste</p>
              <small className="text-[#94A3B8]">Teste de Front-End</small>
            </div>
            <span className="rounded-full bg-[#00C1FA] px-3 py-2.5">HL</span>
          </div>
        </header>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
