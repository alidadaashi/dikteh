import { useEffect, useState } from 'react';

import { fetcher } from '@/lib/api';

const Result = () => {
  const [score, setScore] = useState([]);
  const [grade, setGrade] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // send data from localstorage to server
        const response = await fetcher({
          url: '/api/result',
          method: 'POST',
          body: localStorage.getItem('answers') ?? '',
        });
        // convert object to array
        const resultArray = Object.values(response.data.score);
        setScore(resultArray);
        setGrade(response.data.grade);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='mb-24'>
      <h1 className='mt-2 text-3xl font-medium'> نتیجه آزمون:</h1>
      {score.length && (
        <div className='mx-16 mt-8 grid grid-cols-4 justify-center gap-12 text-xl'>
          <p className='-mt-1 flex flex-col items-center justify-center leading-10'>
            سطح{' '}
          </p>
          <p className='-mt-1 flex flex-col items-center justify-center leading-10'>
            تعداد کل سوالات{' '}
          </p>
          <p className='-mt-1 flex flex-col items-center justify-center leading-10'>
            تعداد پاسخ صحیح{' '}
          </p>
          <p className='-mt-1 flex flex-col items-center justify-center leading-10'>
            تعداد پاسخ غلط
          </p>
        </div>
      )}

      {score.length &&
        score.map((item, index) => (
          <div
            key={index}
            className='mx-16 mt-6 grid grid-cols-4 justify-center gap-12 text-center text-xl'
          >
            <span className='text-3xl font-semibold text-gray-600'>
              {' '}
              {item.level}
            </span>{' '}
            <span className='text-3xl font-bold text-gray-700'>
              {item.correct + item.incorrect}
            </span>{' '}
            <span className='text-3xl font-bold text-green-700'>
              {' '}
              {item.correct}{' '}
            </span>{' '}
            <span className='text-3xl font-bold text-red-700'>
              {' '}
              {item.incorrect}{' '}
            </span>{' '}
          </div>
        ))}

      {/* <div className='mt-8 flex justify-center gap-12 text-xl'>
        <p className='-mt-1 flex flex-col items-center justify-center leading-10'>
          سطح{' '}
          <span className='mt-6 text-3xl font-semibold text-gray-600'>
            {' '}
            راهنمایی
          </span>{' '}
        </p>
        <p className='-mt-1 flex flex-col items-center justify-center leading-10'>
          تعداد کل سوالات{' '}
          <span className='mt-6 text-3xl font-bold text-gray-700'> 6</span>{' '}
        </p>
        <p className='-mt-1 flex flex-col items-center justify-center leading-10'>
          تعداد پاسخ صحیح{' '}
          <span className='mt-6 text-3xl font-bold text-green-700'> 6</span>{' '}
        </p>
        <p className='-mt-1 flex flex-col items-center justify-center leading-10'>
          تعداد پاسخ غلط
          <span className='mt-6 text-3xl font-bold text-red-700'> 6</span>{' '}
        </p>
      </div> */}

      <div>
        <p className='mx-auto my-12 flex w-2/4 justify-center border-t-4 border-blue-700 pt-8 text-center text-4xl font-bold'>
          نمره:
          <span> &nbsp; {grade} </span>
        </p>
      </div>
    </div>
  );
};
export default Result;
