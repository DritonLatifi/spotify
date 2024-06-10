import React from "react";
import Image from "next/image";

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
      <button className="ml-auto p-2 pr-[8%]" aria-label="Play">
        <Image
          src="/play-button.png"
          height={45}
          width={45}
          alt="Play button"
        />
      </button>
    </div>
  );
}
