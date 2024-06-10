import React from "react";
import Image from "next/image";

export default function Song({ song }) {
  return (
    <div className="flex items-center pl-[10%] p-2">
      <div className="flex items-center">
        <div className="mr-4">
          <Image
            src={song.cover}
            height={60}
            width={60}
            alt={`${song.title} cover art`}
          />
        </div>
        <div className="text-left">
          <div className="text-lg font-semibold">{song.title}</div>
          <div className="text-sm text-gray-800">{song.artist}</div>
          <div className="text-sm text-gray-800">{song.duration}</div>
        </div>
      </div>
      <button className="ml-4 p-2" aria-label="Play">
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
