import './header.scss';

export const Header = () => {
    return(
        <header className="max-w-6xl mx-auto header w-full mb-4 justify-center p-4 pt-10">
            <div className='nastaliq text-5xl text-center mb-6'>برگ امتحانی</div>
            <div className="grid grid-cols-3 gap-24">

            <div className="flex flex-col header-label-box  text-right">
                <div className='nastaliq text-3xl mb-3'> نام</div>
                <div className='nastaliq text-3xl'>  نام خانوادگی</div>
            </div>
            <div className="flex flex-col header-label-box text-right">
                <div className='nastaliq text-3xl mb-3'> تحصیلات</div>
                <div className='nastaliq text-3xl'> رشته</div>
            </div>
            <div className="flex flex-col header-label-box text-right">
                <div className='nastaliq text-3xl mb-3' > تاریخ</div>
                <div className='nastaliq text-3xl'> موضوع</div>
            </div>
            </div>
        </header>
    );
}