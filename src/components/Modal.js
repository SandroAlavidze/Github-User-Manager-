import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modal = document.querySelector("#modal");

function Modal({ children }) {
  const modalRef = useRef(null);

  if (!modalRef.current) {
    modalRef.current = document.createElement("div");
  }

  useEffect(() => {
    modal.appendChild(modalRef.current);
    return () => {
      modal.removeChild(modalRef.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, modalRef.current);
}

export default Modal;
