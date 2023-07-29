import { MouseEventHandler, ReactNode, useState } from 'react';

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: MouseEventHandler;
  children: ReactNode;
}) => {
  if (!isOpen) return null;
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [education, setEducation] = useState('');
  const [field, setField] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center  backdrop-blur backdrop-opacity-50 backdrop-filter'>
      <div className='rounded-lg border-2 border-gray-400 bg-white p-8 shadow-lg'>
        <p className='mb-4 text-xl'>
          در صورت علاقمندی میتوانید اطلاعات عمومی خود را وارد کنید.
        </p>
        <form onSubmit={handleSubmit}>
          <div className='mb-4 flex'>
            <label className='basis-1/3 text-base' htmlFor=''>
              نام:{' '}
            </label>
            <input
              className='basis-2/3'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-4 flex'>
            <label className='basis-1/3 text-base' htmlFor=''>
              نام خانوادگی:{' '}
            </label>
            <input
              className='basis-2/3'
              type='text'
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className='mb-4 flex'>
            <label className=' basis-1/3 text-base' htmlFor=''>
              تحصیلات:{' '}
            </label>
            <input
              className='basis-2/3'
              type='text'
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />
          </div>
          <div className='mb-4 flex'>
            <label className='basis-1/3 text-base' htmlFor=''>
              رشته:{' '}
            </label>
            <input
              className='basis-2/3'
              type='text'
              value={field}
              onChange={(e) => setField(e.target.value)}
            />
          </div>
        </form>
        {children}
        <button
          className='mt-4 rounded bg-red-500 px-4 py-2 text-base font-semibold text-white hover:bg-red-600'
          onClick={onClose}
        >
          بازگشت
        </button>
      </div>
    </div>
  );
};

export default Modal;
