"use client";

import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="flex justify-center items-center pt-2 pl-1 pr-1">
      <div className="w-full max-w-7xl relative">
        <input
          type="text"
          placeholder="Search song.."
          className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:border-gray-500"
        />
        <button
          onClick={() => console.log("search button clicked")}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none text-xl pr-3"
        >
          <IoSearch />
        </button>
      </div>
    </div>
  );
}
