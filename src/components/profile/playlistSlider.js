"use client";

import Slider from "@/components/profile/slider";

const artistPlaylists = [
  { title: "Humbleeeee", cover: "/kendrick.webp" },
  { title: "Playlist2", cover: "/kendrick.webp" },
  { title: "Playlist3", cover: "/kendrick.webp" },
  { title: "Playlist4", cover: "/kendrick.webp" },
  { title: "Playlist5", cover: "/kendrick.webp" }
];

export default function PlaylistSlider() {
  return (
    <div>
      <Slider heading={'playlists'} arr={artistPlaylists} />
    </div>
  );
}
