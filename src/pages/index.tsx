import * as React from 'react';

import { Header } from '@/components/Header';
import Main from '@/components/Main';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-12'>
      <Header />
      <Main />
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'></div>
    </main>
  );
}
