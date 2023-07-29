import Link from 'next/link';
import { useState } from 'react';

import Modal from '@/components/Modal';

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className='intro'>
      <h5>۲۰ سوال دوگزینه ای از شما پرسیده خواهدشد.</h5>
      <h6>
        برای یافتن گزینه صحیح تنها ۱۰ ثانیه زمان دارید و در صورت اتمام زمان پاسخ
        شما ثبت نخواهد شد.{' '}
      </h6>
      <p>
        در پایان بر اساس تعداد گزینه های صحیحی که انتخاب کرده اید نمره خواهید
        گرفت.
      </p>
      <div className='mt-12 flex justify-center'>
        <button
          className='mt-5 rounded bg-blue-700 px-12 py-0 font-semibold text-white hover:bg-blue-800'
          onClick={openModal}
        >
          شروع آزمون
        </button>
      </div>

      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <Link
          href='/quiz'
          className='ml-4 mr-auto rounded bg-blue-700 px-8 py-2 text-base font-semibold text-white hover:bg-blue-800'
        >
          شروع آزمون{' '}
        </Link>
      </Modal>
    </div>
  );
}
