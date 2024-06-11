// import CloseButton from "@/components/profile/closeButton";
import Footer from "@/components/footer";
import ArtistInfo from "@/components/profile/artistInfo";
import ProfilePlaylist from "@/components/profile/profilePlaylists";
import AlbumSlider from "@/components/profile/albumSlider";
import PlaylistSlider from "@/components/profile/playlistSlider";
import MusicPlayer from "@/components/musicPlayer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden  bg-[#6B6783] font-sans ">
      {/* <header>
        <CloseButton />
      </header> */}
      <main className="flex-1 flex flex-col overflow-y-scroll">
        <div className="flex-1 min-h-screen">
          <ArtistInfo />
          <ProfilePlaylist />
          <AlbumSlider />
          <PlaylistSlider />
        </div>
      </main>
      <footer>
        <MusicPlayer />
        <Footer />
      </footer>
    </div>
  );
}
