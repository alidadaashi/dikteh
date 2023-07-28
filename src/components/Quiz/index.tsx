import { useEffect, useState } from 'react';

import { saveAnswer } from '@/lib/saveAnswer';

import Timer from '@/components/Timer';

import { question } from '@/types/question';

const Quiz = () => {
  const [questions, setQuestions] = useState<question[]>([]);
  const [order, setOrder] = useState<number>(0);
  const setAnswers = (answer: number) => {
    saveAnswer(answer);
    setOrder(order + 1);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/questions');
        const data = await response.json();
        setQuestions(data.questions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='quiz mt-2'>
      <Timer time={9} order={order} />
      <h4 className='text-3xl'>
        {' '}
        {order + 1}_ &nbsp;گزینه صحیح را انتخاب کنید.
      </h4>
      <div className='mt-20 flex justify-center gap-24'>
        <button
          onClick={() => setAnswers(1)}
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>
            {questions[order]?.optionA}{' '}
          </h2>
        </button>
        <button
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          onClick={() => setAnswers(2)}
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>
            {questions[order]?.optionB}{' '}
          </h2>
        </button>
      </div>
    </div>
  );
};
export default Quiz;
