"use client";

import ArtistInfo from "@/components/artistInfo";
import ArtistSongs from "@/components/artistSongs";
import SongInPlaylist from "@/components/songInPlaylist";
import AlbumSlider from "@/components/albumSlider";
import PlaylistSlider from "@/components/playlistSlider";

export default function Home() {
  const artistAlbums = new Array(5).fill('Album1');
  const artistSongs = new Array(5).fill('Song1');

  return (
    <main className="bg-[#6B6783]">
      <div>
        <ArtistInfo />
      </div>
      <div>
        <ArtistSongs />
      </div>
      <div>
        <SongInPlaylist />
      </div>
      <div>
        <AlbumSlider albums={artistAlbums} />
      </div>
      <div>
      <PlaylistSlider playlists={artistSongs} />
      </div>
    </main>
  );
}
