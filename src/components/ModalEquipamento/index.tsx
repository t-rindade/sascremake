import React, { ReactNode } from "react";
import "./style.modalequipamento.css";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function ModalEquipamento(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div id="modalEquipamentoBackground" onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} id="modalEquipamento">
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
