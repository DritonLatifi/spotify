"use client"

import React, { useState } from "react";
import Playlist from "@/components/Playlist/playlists";
import { IoMdAddCircle } from "react-icons/io";
import { FaSortAlphaDown } from "react-icons/fa";

const initialPlaylists = [
  {
    id: 1,
    title: "zUMBLE.",
    created: "11-6-2024",
    cover: "/kendrick.webp",
    songs: "4"
  }
];

export default function PlaylistContent() {
  const [playlists, setPlaylists] = useState(initialPlaylists);
  const [sortedPlaylists, setSortedPlaylists] = useState([]);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [showAddPlaylistInput, setShowAddPlaylistInput] = useState(false);

  const toggleAddPlaylistInput = () => {
    setShowAddPlaylistInput(!showAddPlaylistInput);
  };

  const sortPlaylists = () => {
    const sorted = [...playlists].sort((a, b) =>
      a.title.localeCompare(b.title, undefined, { sensitivity: 'base' })
    );
    setSortedPlaylists(sorted);
  };

  const handlePlaylistNameChange = (event) => {
    setNewPlaylistName(event.target.value);
  };

  const addNewPlaylist = () => {
    if (newPlaylistName.trim() !== "") {
      const newPlaylist = {
        id: playlists.length + 1,
        title: newPlaylistName,
        created: new Date().toLocaleDateString(),
        cover: "/kendrick.webp",
        songs: "0"
      };
      setPlaylists([...playlists, newPlaylist]);
      setNewPlaylistName("");
      setShowAddPlaylistInput(false); // Hide input after adding playlist
    }
  };

  const currentPlaylists = sortedPlaylists.length > 0 ? sortedPlaylists : playlists;

  return (
    <div className="space-y-4 pt-[5%]">
      <div className="flex items-center pl-[5%]">
        <button onClick={toggleAddPlaylistInput}>
          <IoMdAddCircle size={30} />
        </button>
        {showAddPlaylistInput && (
          <>
            <input
              type="text"
              placeholder="Enter name ..."
              value={newPlaylistName}
              onChange={handlePlaylistNameChange}
              className="rounded px-3 py-2 ml-4 w-[50%] sm:w-64 h-8"
            />
            <div className="pl-[5%]">
            <button className="rounded-lg bg-[#555268] pr-[50%] pl-[50%]" onClick={addNewPlaylist}>
              Add
            </button>
            </div>
          </>
        )}
        <div className="ml-auto pr-[5%]">
          <button className="" onClick={sortPlaylists}>
            <FaSortAlphaDown size={30} />
          </button>
        </div>
      </div>
      {currentPlaylists.map((playlist) => (
        <Playlist key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
}