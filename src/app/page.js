"use client"

import Slider from "@/components/slider";

export default function Home() {
  const dummyArray = new Array(5).fill('Kendrick Lamar')
  
  return (
    <main className="bg-[#6B6783]">
      <a href={`https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${process.env.REDIRECT_URI}`}>
        Spotify Login
      </a>
      <div className="flex flex-col gap-6 pl-4 pt-4">
        <Slider heading={'songs'} arr={dummyArray} />
        <Slider heading={'playlist'} arr={dummyArray} />
        <Slider heading={'albums'} arr={dummyArray} />
      </div>
    </main>
  )
}
