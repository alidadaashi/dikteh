import { useContext } from 'react';

import HeaderContext from '@/shared/headerContext';

export const Header = () => {
  const { name, surname, education, field } = useContext(HeaderContext);

  return (
    <header className='header mx-auto mb-4 w-full max-w-6xl justify-center p-4 pt-10'>
      <div className='nastaliq mb-6 text-center text-5xl'>برگ امتحانی</div>
      <div className='grid grid-cols-3 gap-24'>
        <div className='header-label-box flex flex-col  text-right'>
          <div className='nastaliq mb-3 text-3xl'>
            نام
            <span className='estedad header-info mr-4 text-2xl text-gray-700'>
              {' '}
              {name}
            </span>
          </div>
          <div className='nastaliq text-3xl'>
            نام خانوادگی
            <span className='estedad header-info mr-4 text-2xl text-gray-700'>
              {' '}
              {surname}
            </span>
          </div>
        </div>
        <div className='header-label-box flex flex-col text-right'>
          <div className='nastaliq mb-3 text-3xl'>
            تحصیلات
            <span className='estedad header-info mr-4 text-2xl text-gray-700'>
              {' '}
              {education}
            </span>
          </div>
          <div className='nastaliq text-3xl'>
            رشته
            <span className='estedad header-info mr-4 text-2xl text-gray-700'>
              {' '}
              {field}
            </span>
          </div>
        </div>
        <div className='header-label-box flex flex-col text-right'>
          <div className='nastaliq mb-3 text-3xl'>
            تاریخ
            <span className='estedad header-info mr-4 text-2xl text-gray-700'>
              ۱۴۰۱
            </span>
          </div>
          <div className='nastaliq text-3xl'>
            موضوع
            <span className='estedad header-info mr-4 text-2xl text-gray-700'>
              {' '}
              دیکته
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
