"use client";

import Image from "next/image";
import Song from "@components/profile/song";

// Get the playlist from the API and somehow put song info here
const playList = [
  {
    title: "HUMBLE.",
    artist: "Kendrick Lamar",
    duration: "4:30",
    cover: "/kendrick.webp",
  },
  { 
    title: "Song 2", 
    artist: "BLUR", 
    duration: "2:01",
    cover: "/kendrick.webp" 
  },
  {
    title: "Heads Will Roll",
    artist: "Yeah Yeah Yeahs",
    duration: "3:41",
    cover: "/kendrick.webp",
  },
];

export default function PlaylistContent() {

  return (
    <>
      <div className="text-center mt-8">
        {/* Playlist title */}
        <h1 className="text-lg font-semibold">My Playlist 12</h1>
      </div>
      {/* Playlist cover */}
      <div className="flex justify-center items-center mt-8 pb-10">
        <Image
          src="/kendrick.webp"
          width={200}
          height={200}
          alt="playlist-cover"
          priority
          className="block"
          style={{ marginTop: "20px" }}
        />
      </div>
      {/* Songs list */}
      <div className="space-y-4">
        {playList.map((song, index) => {
          return <Song key={index} song={song} />;
        })}
      </div>
    </>
  );
}
