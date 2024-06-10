import React from "react";
import Image from "next/image";

export default function Song({ song }) {

  return (
    <div className="flex items-center p-4 pl-[10%] space-x-4 border-b border-gray-200">
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
      <button className="flex-shrink-0 p-2" aria-label="Play">
        <Image
          src="/play-button.png"
          height={30}
          width={30}
          alt="Play button"
        />
      </button>
    </div>
  );
}
