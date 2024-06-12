import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function Playlist({ playlist }) {
  return (
    <div className="flex items-center pb-[3%] pl-[5%] space-x-4 song-container hover:bg-[#555268] hover:bg-opacity-20">
      <div className="flex-shrink-0">
        <Image
          src={playlist.cover}
          height={70}
          width={70}
          alt={`${playlist.title} cover art`}
          className="rounded"
        />
      </div>
      <div className="flex-1 text-left">
        <div className="text-lg font-semibold">{playlist.title}</div>
        <div className="text-sm">Created: {playlist.created}</div>
        <div className="text-sm">Songs: {playlist.songs}</div>
      </div>
      <div className="ml-auto flex items-center pr-[5%]">
        <FaPlay size={25} onClick={() => console.log('open playlist clicked')}/>
      </div>
    </div>
  );
}
