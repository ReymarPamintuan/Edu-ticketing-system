"use client"

import { useState } from 'react';

function UserModal() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
      setModalOpen(true);
      setTimeout(() => {
        setModalOpen(false);
      }, 2500);
  };

const Modal = ({ isOpen, onClose }) => {
    return (
      <div className='absolute flex justify-center items-center z-[100]'>
        <div className={`${isOpen ? 'modal' : 'modal hidden'} border-2 w-[400px] `}>
          <div className='flex justify-center items-center px-2 py-3 border-b border-black bg-[#f4f4f4]'><h3>Copy to clipboard</h3></div>
          <div className='flex justify-center items-center px-2 py-2'><p>Copied 5 rows to clipboard.</p></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button className='px-[10px] py-[4px] bg-[#6c757d] text-white rounded-[2px] font-[600]' onClick={handleButtonClick}>Copy</button>
      {modalOpen && <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />}
    </div>
  );
}

export default UserModal;
