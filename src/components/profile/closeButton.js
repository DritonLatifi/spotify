"use client";

import { IoMdClose } from "react-icons/io";

export default function CloseButton() {
  const handleClose = () => {
    console.log("Close button clicked");
  };

  return (
    <div className="bg-[#555268] h-10 flex items-center justify-between px-4 opacity-30">
      <span></span>
      <button
        onClick={handleClose}
        className="flex items-center justify-center w-8 h-8 rounded-full"
      >
        <IoMdClose size={24} />
      </button>
    </div>
  );
}