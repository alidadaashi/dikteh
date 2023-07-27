import  { useEffect, useState } from 'react';
import './timer.css';
const Timer = ({time}:{time:string}) => {

    const [seconds, setSeconds] = useState(parseInt(time));
    
    var r:any = document.querySelector(':root');
    r.style.setProperty('--time', `${time}s`);
    useEffect(() => {
        if(seconds>0){
            const interval = setInterval(() => setSeconds(seconds - 1) , 1000);
            return () => clearInterval(interval);
        }
      }, [seconds]);

    return (
        <div className="timer"> {seconds}  </div>
    );
}
export default Timer;