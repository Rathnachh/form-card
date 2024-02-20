import React, { ReactNode } from "react";
import { useState } from "react";
interface ModalProps {
  children: ReactNode;
  selectEdit: string;
}
const Modal: React.FC<ModalProps> = ({ children, selectEdit }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <div className="">
        <button
          className="w-10 h-10 bg-pink-200 rounded-full"
          onClick={() => setIsOpenModal(true)}
        >
          {selectEdit ? "edit" : "+"}
        </button>
        <div
          onClick={() => setIsOpenModal(false)}
          className="w-10 h-10 bg-pink-200 rounded-full fixed"
        >
          <button className="flex justify-center items-center m-auto mt-2">
            &times;
          </button>
        </div>
        {isOpenModal && children}
      </div>
    </>
  );
};

export { Modal };
