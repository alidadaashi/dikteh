
import Quiz from '../Quiz';
import Timer from '../Timer';
import './main.scss' 
export default function Main() {
    return (
        <div className="max-w-6xl mx-auto w-full main  p-7 relative"> 
            <Quiz />
            <Timer time='15' />
        </div>
    );
}