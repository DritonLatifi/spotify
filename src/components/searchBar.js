"use client";

import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="w-5/6 h-10 mx-auto my-4 px-6 rounded-full flex justify-between items-center bg-white">
      <input
        type="text"
        placeholder="Madison Beer.."
        className="outline-none border-none rounded-l-full"
      />
      <IoSearch />
    </div>
  );
}
