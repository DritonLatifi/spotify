"use client";

import { useState, useEffect } from "react";

export default function Categories() {
  const [selected, setSelected] = useState("All");

  useEffect(() => {
    console.log(`${selected} button is initially selected`);
  }, [selected]);

  const handleButtonClick = (category) => {
    setSelected(category);
    console.log(`${category} button clicked`);
  };

  const buttonClasses = (category) => {
    const isSelected = selected === category;
    return `rounded-full font-bold py-2 px-4 focus:outline-none transition-colors duration-300 ${
      isSelected ? "bg-white text-black" : "bg-black text-white hover:bg-white hover:text-black"
    }`;
  };

  return (
    <div className="flex justify-center items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 p-4 pb-3">
      <button
        onClick={() => handleButtonClick("All")}
        className={buttonClasses("All")}
      >
        All
      </button>
      <button
        onClick={() => handleButtonClick("Songs")}
        className={buttonClasses("Songs")}
      >
        Songs
      </button>
      <button
        onClick={() => handleButtonClick("Albums")}
        className={buttonClasses("Albums")}
      >
        Albums
      </button>
      <button
        onClick={() => handleButtonClick("Artists")}
        className={buttonClasses("Artists")}
      >
        Artists
      </button>
    </div>
  );
}
