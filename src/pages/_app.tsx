import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import '@/styles/globals.scss';
import '@/components/Header/header.scss';
import '@/components/Timer/timer.css';

import { Header } from '@/components/Header';

// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately

// import ThemeContext from '@/shared/themeContext';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // check localStorage for answers
  useEffect(() => {
    if (localStorage.getItem('answers')) {
      router.push('/result');
    }
  }, []);

  return (
    // <ThemeContext.Provider value='light'>
    <main className='flex min-h-screen flex-col items-center p-12'>
      <Header />
      <div className='quiz w-full'>
        <div className='main relative mx-auto w-full  max-w-6xl p-7'>
          <Component {...pageProps} />
        </div>
      </div>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'></div>
    </main>
    // </ThemeContext.Provider>
  );
}

export default MyApp;
