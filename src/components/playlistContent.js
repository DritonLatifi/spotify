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
    cover: "/S2.jpg" 
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
      <div className="">
        {/* Playlist title should be displayed here */}
        <h1 className="float-center display-block flex justify-left items-center mt-8 ml-[10%] text-lg font-semibold">
          My Playlist 12
        </h1>
      </div>
      {/* displays the cover the user has chosen for their playlist */}
      <div className="flex justify-center items-center mt-8 pb-10">
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
