"use client";

import Slider from "@/components/slider";   

const artistPlaylists = [
  { title: "Humbleeeee", cover: "/kendrick.webp" },
  { title: "Song2", cover: "/kendrick.webp" },
  { title: "Song3", cover: "/kendrick.webp" }, 
  { title: "song4", cover: "/kendrick.webp" }, 
  { title: "song5", cover: "/kendrick.webp" }  
];

export default function PlaylistSlider() {
  return (
    <div>
      <Slider heading={'playlists'} arr={artistPlaylists} /> 
    </div>
  );
}
