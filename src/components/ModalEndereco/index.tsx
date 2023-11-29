import React, { ReactNode } from "react";
import "./style.modalendereco.css";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function ModalEndereco(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div id="modalBackground" onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} id="modal">
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
