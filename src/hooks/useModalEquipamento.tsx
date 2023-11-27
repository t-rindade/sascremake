import { useState } from "react";

export default function useModalEquipamento() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return {
    isOpen,
    toggle,
  };
}
