"use client";

import { IoMdClose } from "react-icons/io";

export default function CloseButton() {
  const handleClose = () => {
    console.log("Close button clicked");
  };

  return (
    <div>
      <button
        onClick={handleClose}
        className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300"
      >
        <IoMdClose size={24} />
      </button>
    </div>
  );
}
