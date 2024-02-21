import React, { ReactNode, useState } from "react";

interface ModalProps {
  children: ReactNode;
  selectEdit: string;
}

const Modal: React.FC<ModalProps> = ({ children, selectEdit }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <div className="relative">
        <button
          className="w-10 h-10 bg-pink-200 rounded-full"
          onClick={() => setIsOpenModal(true)}
        >
          {selectEdit ? "edit" : "+"}
        </button>
        {isOpenModal && (
          <div className="absolute top-2 right-80 my-4 mx-2">
            <button
              className="w-8 h-8 bg-pink-200 rounded-full"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        )}
        {isOpenModal && children}
      </div>
    </>
  );
};

export { Modal };
