import React, { useEffect, useState } from 'react';

const ProgressBar = ({ value, maxValue, level }) => {
  // Calculate the percentage of progress
  const percentage = (value / maxValue) * 100 + 1;
  const [bgColor, setBgColor] = useState('bg-blue-500');
  useEffect(() => {
    switch (level) {
      case 'ابتدایی':
        setBgColor('bg-yellow-500');
        break;
      case 'راهنمایی':
        setBgColor('bg-green-500');
        break;
      case 'دبیرستان':
        setBgColor('bg-red-500');
        break;
      case 'کنکور':
        setBgColor('bg-red-500');
        break;
      default:
        setBgColor('bg-blue-500');
    }
  }, [level]);

  return (
    <div className='relative mx-auto mt-8 h-8 w-2/4 overflow-hidden rounded-lg bg-gray-400'>
      {/* Progress bar */}
      <div
        className={`absolute left-0 top-0 h-full w-0.5 rounded-lg  transition-all duration-200 ${bgColor}`}
        style={{ width: `${percentage}%` }}
      />

      {/* Label */}
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform font-bold text-white'>
        {/* {`${percentage.toFixed(2)}%`}  */}
        <span className='ml-2'>{`سطح: ${level} `}</span>

        {` ${maxValue} / ${value}`}
      </div>
    </div>
  );
};

export default ProgressBar;
