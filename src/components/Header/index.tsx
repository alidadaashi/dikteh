import './header.scss';

export const Header = () => {
  return (
    <header className='header mx-auto mb-4 w-full max-w-6xl justify-center p-4 pt-10'>
      <div className='nastaliq mb-6 text-center text-5xl'>برگ امتحانی</div>
      <div className='grid grid-cols-3 gap-24'>
        <div className='header-label-box flex flex-col  text-right'>
          <div className='nastaliq mb-3 text-3xl'> نام</div>
          <div className='nastaliq text-3xl'> نام خانوادگی</div>
        </div>
        <div className='header-label-box flex flex-col text-right'>
          <div className='nastaliq mb-3 text-3xl'> تحصیلات</div>
          <div className='nastaliq text-3xl'> رشته</div>
        </div>
        <div className='header-label-box flex flex-col text-right'>
          <div className='nastaliq mb-3 text-3xl'> تاریخ</div>
          <div className='nastaliq text-3xl'> موضوع</div>
        </div>
      </div>
    </header>
  );
};
