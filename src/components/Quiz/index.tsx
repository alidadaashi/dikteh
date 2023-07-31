import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { saveAnswer } from '@/lib/saveAnswer';

import ProgressBar from '@/components/Progressbar';
import Timer from '@/components/Timer';

import { question } from '@/types/question';

const Quiz = () => {
  const calculateMaxLevel = (name: string) => {
    const max = questions.filter((q) => q.level.name === name).length;
    return max;
  };
  const [questions, setQuestions] = useState<question[]>([]);
  const [order, setOrder] = useState<number>(0);
  const [quizStatus, setQuizStatus] = useState<boolean>(true);
  const router = useRouter();
  const disableQuiz = () => {
    setQuizStatus(false);
  };
  const enableQuiz = () => {
    setQuizStatus(true);
  };
  const setAnswers = (answer: number) => {
    saveAnswer(answer);
    setOrder(order + 1);
    if (order + 1 === questions.length) {
      router.push('/result');
    }
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
    <div className=' mt-2'>
      {order + 1 <= questions.length && (
        <h4 className='text-3xl'>
          {' '}
          {order + 1}_ &nbsp;گزینه صحیح را انتخاب کنید.
        </h4>
      )}
      <div className='relative mt-20 flex items-center justify-center gap-16'>
        {!quizStatus && (
          <div className='coverAnswers absolute h-full w-full rounded-lg bg-blue-300 opacity-50'></div>
        )}
        <button
          onClick={() => setAnswers(1)}
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>
            {questions[order]?.optionA}{' '}
          </h2>
        </button>
        {questions.length && (
          <Timer timefinished={disableQuiz} time={9} order={order} />
        )}
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
      {!quizStatus && (
        <div className='mx-auto text-center'>
          {' '}
          <p className='mt-1 text-xl font-medium text-gray-800'>
            زمان شما برای پاسخ به این سوال به پایان رسید
          </p>
          <br />
          <button
            onClick={() => {
              enableQuiz();
              setOrder(order + 1);
            }}
            className='ml-4 mr-auto rounded bg-blue-700 px-8 py-2 text-base font-semibold text-white hover:bg-blue-800'
          >
            سوال بعدی
          </button>
        </div>
      )}
      <ProgressBar
        value={questions[order]?.levelOrder - 1}
        maxValue={calculateMaxLevel(questions[order]?.level.name)}
        level={questions[order]?.level.name}
      />
    </div>
  );
};
export default Quiz;
