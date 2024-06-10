"use client";

import Image from "next/image";
import Song from "./song";

// get cover image from API
const accessToken = "your_access_token";
const playlistId = "3cEYpjA9oz9GiPac4AsH4n"; // Example playlist ID
const apiUrl = `https://api.spotify.com/v1/playlists/${playlistId}/images`;

async function getPlaylistCover() {
  fetch(apiUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch playlist images");
      }
      return response.json();
    })
    .then((data) => {
      // Handle the response data here
      console.log("Playlist Images:", data);
    })
    .catch((error) => {
      console.error("Error fetching playlist images:", error);
    });
}

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
      <div className="flex justify-between items-center mt-3 relative w-full">
        {/* Playlist title should be displayed here */}
        <h1 className="text-2xl font-bold ml-[5%]">My Playlist 12</h1>
        <button className="ml-auto p-2 pr-5" aria-label="Close">
          <Image
            src="/close_icon.webp"
            height={25}
            width={25}
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
