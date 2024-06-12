"use client"

import Slider from "@/components/slider";

import { getToken } from "./actions/token";
import { useEffect, useState } from "react";

export default function Home() {
  const [popular, setPopular] = useState([])
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    if (!getToken()) return

    fetch('api/top-songs?limit=' + 10)
      .then(res => res.json())
      .then(data => setPopular(data))

    fetch('api/top-albums')
      .then(res => res.json())
      .then(data => setAlbums(data))

  }, [])

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
      <Slider heading={'songs'} arr={popular} />
      <Slider heading={'albums'} arr={albums} />
      {/* <Slider heading={'albums'} arr={dummyArray} /> */}
    </div>
  }

  return (
    <main className="bg-[#6B6783]">
      {getToken() ? <Main /> : <a href={`https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&scope=${scope}`}>
        Spotify Login
      </a>}
    </main>
  )
}
