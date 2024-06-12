"use client";

import Playlist from "@/components/Playlist/playlists";

// Get the playlist from the API and somehow put song info here
const playList = [
  {
    title: "HUMBLE.",
    created: "11-6-2024",
    cover: "/kendrick.webp",
    songs: "4"
  },
  {
    title: "Playlist 2",
    created: "11-6-2024",
    cover: "/kendrick.webp",
    songs: "56"
  },
  {
    title: "Playlist 3",
    created: "17-8-2024",
    cover: "/kendrick.webp",
    songs: "34"
  },
  { title: "Playlist 4",
    created: "11-5-2024",
    cover: "/kendrick.webp",
    songs: "201"
  },
  { title: "Playlist 5",
    created: "13-6-2024",
    cover: "/kendrick.webp",
    songs: "65"
  },
];

export default function PlaylistContent() {

  return (
    <>
      <div className="space-y-4 pt-[10%]">
        {playList.map((playlist, index) => {
          return <Playlist key={index} playlist={playlist} />;
        })}
      </div>
    </>
  );
}
