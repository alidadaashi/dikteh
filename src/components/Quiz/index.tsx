import { useEffect, useState } from 'react';

import { question } from '@/types/question';

const Quiz = () => {
  const [questions, setQuestions] = useState<question[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/questions');
        const data = await response.json();
        setQuestions(data.questions);
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='quiz mt-2'>
      <h4 className='text-3xl'>گزینه صحیح را انتخاب کنید.</h4>
      <div className='mt-20 flex justify-center'>
        <a
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>
            او هنرش را به منصه‌ی ظهور رساند{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
        </a>
        <a
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>
            او هنرش را به منعصه‌ی ظهور رساند{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
        </a>
      </div>
    </div>
  );
};
export default Quiz;
