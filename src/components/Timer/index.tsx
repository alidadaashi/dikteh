import { useEffect, useState } from 'react';

// import './timer.css';
const Timer = ({ time, order }: { time: number; order: number }) => {
  const [seconds, setSeconds] = useState(time);
  useEffect(() => {
    setSeconds(time); // Update the seconds state when the time prop changes
  }, [order]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useEffect(() => {
    const r: any = document.querySelector(':root');
    r.style.setProperty('--time', `${time}s`);
    if (seconds > 0) {
      const interval = setInterval(() => setSeconds(seconds - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [seconds]);

  return (
    <div className={`timer-constant-props ${seconds ? 'timer' : ''}`}>
      {' '}
      {seconds}{' '}
    </div>
  );
};
export default Timer;
