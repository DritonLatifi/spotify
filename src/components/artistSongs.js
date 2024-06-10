"use client"

import Image from "next/image";

const songs = [
  { src: '/kendrick.webp', alt: 'image', title: 'Humble', artist: 'Kendrick', duration: '4:30' },
  { src: '/kendrick.webp', alt: 'image', title: 'HumbleTwo', artist: 'Kendrick', duration: '4:32' },
  { src: '/kendrick.webp', alt: 'image', title: 'HumbleThree', artist: 'Kendrick', duration: '4:33' },
];

export default function ArtistSongs() {
  return (
    <div className="">
      {songs.map((song, index) => (
        <div key={index} className="grid grid-cols-4 grid-rows-2 gap-1 items-center">
          <div className="col-span-1 row-span-3">
            <Image src={song.src} alt={song.alt} height={70} width={70} />
          </div>
          <div className="col-span-3">
            <h1>{song.title}</h1>
          </div>
          <div className="col-span-3">
            <p>{song.artist}</p>
          </div>
          <div className="col-span-3">
            <p>{song.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
