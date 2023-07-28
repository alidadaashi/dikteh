import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center backdrop-blur backdrop-opacity-50 backdrop-filter'>
      <div className='rounded-lg bg-white p-4 shadow-lg'>
        {children}
        <button
          className='mt-4 rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600'
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
