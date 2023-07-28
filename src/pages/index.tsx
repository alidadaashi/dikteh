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
    <div>
      <button
        className='rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600'
        onClick={openModal}
      >
        Start Quiz
      </button>

      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <h2 className='mb-4 text-xl font-bold'>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <Link href='/quiz'> Start Quiz </Link>
      </Modal>
    </div>
  );
}
