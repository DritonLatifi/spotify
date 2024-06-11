"use client";

import Slider from "@/components/Homepage/slider";

const artistAlbums = [
  { title: "Album1", cover: "/kendrick.webp" },
  { title: "Album2", cover: "/kendrick.webp" },
  { title: "Album3", cover: "/kendrick.webp" },
  { title: "Album4", cover: "/kendrick.webp" },
  { title: "Album5", cover: "/kendrick.webp" }
];

export default function PlaylistSlider() {
  return (
    <div className="pb-[10%]">
      <Slider heading={'albums'} arr={artistAlbums} />
    </div>
  );
}
