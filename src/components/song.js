import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function Song({ song }) {
  return (
    <div className="flex items-center pl-[8%] p-2 mb-3">
      <div className="flex items-center">
        <div className="mr-4">
          <Image
            src={song.cover}
            height={80}
            width={80}
            alt={`${song.title} cover art`}
          />
        </div>
        <div className="text-left">
          <div className="text-xl font-semibold">{song.title}</div>
          <div className="text-base text-gray-800">{song.artist}</div>
          <div className="text-base text-gray-800">{song.duration}</div>
        </div>
      </div>
      <div className="ml-auto flex items-center pr-[5%]">
        <FaPlay size={25} onClick={() => console.log('play ' + song.title + ' clicked')}/>
      </div>
    </div>
  );
}
