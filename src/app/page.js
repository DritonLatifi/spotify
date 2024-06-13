"use client"

import Footer from "@/components/footer";
import MusicPlayer from "@/components/musicPlayer";
import SearchBar from "@/components/searchBar";
import Categories from "@/components/categories";
import Slider from "@/components/slider";

import { getToken } from "./actions/token";
import { useEffect, useState } from "react";

export default function Home() {
  const [popular, setPopular] = useState([])
  const [albums, setAlbums] = useState([])
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    if (!getToken()) return

    fetch('api/top-songs?limit=' + 10)
      .then(res => res.json())
      .then(data => setPopular(data))

    fetch('api/top-albums')
      .then(res => res.json())
      .then(data => setAlbums(data))

    fetch('api/top-playlists')
      .then(res => res.json())
      .then(data => setPlaylists(data))
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
    return (
    <>
      <SearchBar />
      <Categories />
      <div className="flex flex-col gap-6 pl-4 pt-4">
        <Slider heading={'songs'} arr={popular} />
        <Slider heading={'albums'} arr={albums} />
        <Slider heading={'playlists'} arr={playlists} />
      </div>
    </>
    )
  }

  const Login = () => {
    return (
      <a className="active:scale-90 transition-all bg-gradient-to-b from-black to-gray-800 text-white shadow-2xl font-bold text-2xl p-10 rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        href={`https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&scope=${scope}&show_dialog=true`}>
        Login
      </a>
    )
  }

  return (
    <>
      <main className="bg-[#6B6783]">
        {getToken() ? <Main /> : <Login />}
      </main>
      <footer>
        <MusicPlayer />
        <Footer />
      </footer>
    </>
  )
}
