"use client"

import Slider from "@/components/slider";

import { getToken } from "./actions/token";

export default function Home() {
  const dummyArray = new Array(5).fill('Kendrick Lamar')

  const scope = [
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-library-read',
    'user-library-modify',
    'user-read-playback-state',
    'user-modify-playback-state'
  ].join('%20')

  const Main = () => {
    return <div className="flex flex-col gap-6 pl-4 pt-4">
      <Slider heading={'songs'} arr={dummyArray} />
      <Slider heading={'playlist'} arr={dummyArray} />
      <Slider heading={'albums'} arr={dummyArray} />
    </div>
  }

  return (
    <main className="bg-[#6B6783]">
      {getToken() ? <Main/> : <a href={`https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&scope=${scope}`}>
        Spotify Login
      </a>}
    </main>
  )
}
