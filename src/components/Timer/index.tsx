import { useEffect, useState } from 'react';

// import './timer.css';
const Timer = ({
  time,
  order,
  timefinished,
}: {
  time: number;
  order: number;
}) => {
  const [seconds, setSeconds] = useState(time);
  useEffect(() => {
    setSeconds(-1);
    setTimeout(() => setSeconds(time), 50);
    // setSeconds(time); // Update the seconds state when the time prop changes
  }, [order]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useEffect(() => {
    const r: any = document.querySelector(':root');
    r.style.setProperty('--time', `${time}s`);
    if (seconds > 0) {
      const interval = setInterval(() => setSeconds(seconds - 1), 1000);
      return () => clearInterval(interval);
    } else if (seconds === 0) {
      timefinished();
    }
  }, [seconds]);

  return (
    <div className={`timer-constant-props ${seconds > 0 ? 'timer' : ''}`}>
      {' '}
      {seconds}{' '}
    </div>
  );
};
export default Timer;
