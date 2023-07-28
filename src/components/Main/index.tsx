import './main.scss';

import Quiz from '../Quiz';
import Timer from '../Timer';
export default function Main() {
  return (
    <div className='main relative mx-auto w-full  max-w-6xl p-7'>
      <Quiz />
      <Timer time='15' />
    </div>
  );
}
