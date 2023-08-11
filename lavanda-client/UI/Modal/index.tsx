"use client";

import React, { useEffect } from "react";
import css from "./Modal.module.scss";
import Image from "next/image";

import CloseBtn from "@/assets/close.svg";

interface IModal {
  children: React.ReactNode;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<IModal> = ({ children, visible, setVisible }) => {
  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className={css.background}>
          <div className={css.overlay}>
            <div className={css.wrapper}>
              <Image
                className={css.close}
                src={CloseBtn}
                alt="close button"
                onClick={closeModal}
              />
              <div>{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
