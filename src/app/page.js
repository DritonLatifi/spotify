"use client"

import ArtistInfo from "@/components/artistInfo";
import Slider from "@/components/slider";
import SongInPlaylist from "@/components/songInPlaylist";

export default function Home() {
  const artistAlbums = new Array(5).fill('Album1', 'Album2')
  const artistSongs = new Array(5).fill('Song1')

  return (
    <main className="bg-[#6B6783]">
      <div>
        <ArtistInfo />
      </div>
      <div>
        <SongInPlaylist />
      </div>
      <div>
        <Slider heading={'albums'} arr={artistAlbums} />
        <Slider heading={'playlists'} arr={artistSongs} />
      </div>
    </main>
  )
}