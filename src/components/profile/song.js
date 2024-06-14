import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function Song({ song }) {
  return (
    <div className="flex items-center pb-[3%] pl-[5%] space-x-4 song-container">
      <div className="flex-shrink-0">
        <Image
          src={song.cover}
          height={70}
          width={70}
          alt={`${song.title} cover art`}
          className="rounded"
        />
      </div>
      <div className="flex-1 text-left">
        <div className="text-lg font-semibold">{song.title}</div>
        <div className="text-sm text-gray-600">{song.artist}</div>
        <div className="text-sm text-gray-600">{song.duration}</div>
      </div>
      <div className="ml-auto flex items-center pr-[5%]">
        <FaPlay size={25} onClick={() => console.log('play song clicked')}/>
      </div>
    </div>
  );
}
