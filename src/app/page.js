"use client";

import ArtistInfo from "@/components/artistInfo";
import ProfilePlaylist from "@/components/profilePlaylists";
import AlbumSlider from "@/components/albumSlider";
import PlaylistSlider from "@/components/playlistSlider";

export default function Home() {

  return (
    <main className="bg-[#6B6783] font-sans">
      <div>
        <ArtistInfo />
      </div>
      <div>
        <ProfilePlaylist />
      </div>
      <div>
        <AlbumSlider />
      </div>
      <div>
      <PlaylistSlider />
      </div>
    </main>
  );
}
