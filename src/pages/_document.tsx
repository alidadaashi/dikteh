import type { Metadata } from 'next';
import { Head, Html, Main, NextScript } from 'next/document';

// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function Document({ children }: { children: React.ReactNode }) {
  return (
    <Html lang='en'>
      <Head></Head>
      <body // className={inter.className}
        dir='rtl'
      >
        <Main />
        <NextScript />
        {children}
      </body>
    </Html>
  );
}