import { useEffect, useState } from 'react';

import { fetcher } from '@/lib/api';

const Result = () => {
  const [score, setScore] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        // send data from localstorage to server
        const response = await fetcher({
          url: '/api/result',
          method: 'POST',
          body: localStorage.getItem('answers') ?? '',
        });
        setScore(response.data.score);
        // const data = await response.json();
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Result: {score}</h1>
    </div>
  );
};
export default Result;
