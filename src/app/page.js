"use client";

import ArtistInfo from "@/components/profile/artistInfo";
import ProfilePlaylist from "@/components/profile/profilePlaylists";
import AlbumSlider from "@/components/profile/albumSlider";
import PlaylistSlider from "@/components/profile/playlistSlider";
import CloseButton from "@/components/profile/closeButton";
import Footer from "@/components/footer";

export default function Home() {

  return (
    <main className="bg-[#6B6783] font-sans">
      <div>
        <CloseButton />
      </div>
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
      <div>
        <Footer />
      </div>
    </main>
  );
}
