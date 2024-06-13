"use client";

import Playlist from "@/components/Playlist/playlists";
import { IoMdAddCircle } from "react-icons/io";
import React, { useState } from "react";

const initialPlaylists = [
  {
    id: 1,
    title: "HUMBLE.",
    created: "11-6-2024",
    cover: "/kendrick.webp",
    songs: "4"
  },
  {
    id: 2,
    title: "Playlist 2",
    created: "11-6-2024",
    cover: "/kendrick.webp",
    songs: "56"
  },
  {
    id: 3,
    title: "Playlist 3",
    created: "17-8-2024",
    cover: "/kendrick.webp",
    songs: "34"
  },
  {
    id: 4,
    title: "Playlist 4",
    created: "11-5-2024",
    cover: "/kendrick.webp",
    songs: "201"
  },
  {
    id: 5,
    title: "Playlist 5",
    created: "13-6-2024",
    cover: "/kendrick.webp",
    songs: "65"
  },
];

export default function PlaylistContent() {
  const [playlists, setPlaylists] = useState(initialPlaylists);

  const addNewPlaylist = () => {
    const newPlaylist = {
      id: playlists.length + 1,
      title: `Playlist ${playlists.length + 1}`,
      created: new Date().toLocaleDateString(),
      cover: "/kendrick.webp",
      songs: "0"
    };
    setPlaylists([...playlists, newPlaylist]);
  };

  return (
    <div className="space-y-4 pt-[5%]">
      <div className="pl-[5%]">
      <button aria-label="Add Playlist" onClick={addNewPlaylist}>
        <IoMdAddCircle size={30} />
      </button>
      </div>
      {playlists.map((playlist) => (
        <Playlist key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
}
