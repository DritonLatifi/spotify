import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function Song({ song }) {
  return (
    <div className="flex items-center p-4 pl-[10%] space-x-4 song-container hover:bg-[#555268] hover:bg-opacity-20">
      <div className="flex-shrink-0">
        <Image
          src={song.cover}
          height={60}
          width={60}
          alt={`${song.title} cover art`}
          className="rounded"
        />
      </div>
      <div className="flex-1 text-left">
        <div className="text-lg font-semibold">{song.title}</div>
        <div className="text-sm text-gray-600">{song.artist}</div>
        <div className="text-sm text-gray-600">{song.duration}</div>
      </div>
      <div>
        <FaPlay size={25} onClick={() => console.log('play song clicked')}/>
      </div>
    </div>
  );
}
