import { AppProps } from 'next/app';

import '@/styles/globals.scss';
import '@/components/Header/header.scss';
import '@/components/Main/main.scss';
import '@/components/Timer/timer.css';

// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately

// import ThemeContext from '@/shared/themeContext';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ThemeContext.Provider value='light'>
    <Component {...pageProps} />
    // </ThemeContext.Provider>
  );
}

export default MyApp;
