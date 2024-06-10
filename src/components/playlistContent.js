"use client";

import Image from "next/image";
import Song from "./song";

// get the playlist from the api and somehow put song info here
const playList = [
  {
    title: "HUMBLE.",
    artist: "Kendrick Lamar",
    duration: "4:30",
    cover: "/Kendrick.webp",
  },
  {
    title: "Song 2",
    artist: "BLUR",
    duration: "2:01",
    cover: "/S2.jpg",
  },
  {
    title: "Heads Will Roll",
    artist: "Yeah Yeah Yeahs",
    duration: "3:41",
    cover: "/HWR.jpg",
  },
];

export default function PlaylistContent() {
  return (
    <>
      <div className="flex justify-between items-center mt-4 ml-0 relative w-full">
  {/* Playlist title should be displayed here */}
  <h1 className="text-2xl font-bold">My Playlist 12</h1>
  <button className="ml-auto p-2 pr-5" aria-label="Close">
    <Image
      src="/close_icon.webp"
      height={30}
      width={30}
      alt="Close button"
    />
  </button>
  <div className="absolute bottom-0 left-0 right-0 w-full h-[2px] bg-gray-600 shadow"></div>
</div>



      {/* displays the cover the user has chosen for their playlist */}
      <div className="flex justify-center items-center pb-10">
        <Image
          src="/playlist_Cover_Example.jpg"
          width={200}
          height={200}
          alt="playlist-cover"
          priority
          className="block"
          style={{ marginTop: "20px" }}
        />
      </div>

      {/* actually displays the songs */}
      <div>
        {playList.map((song, index) => (
          <Song key={index} song={song} />
        ))}
      </div>
    </>
  );
}
