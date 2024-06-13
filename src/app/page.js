import Footer from "@/components/footer";
import AlbumSlider from "@/components/Homepage/albumSlider";
import PlaylistSlider from "@/components/Homepage/playlistSlider";
import MusicPlayer from "@/components/musicPlayer";
import SongSlider from "@/components/Homepage/songSlider.js";
import SearchBar from "@/components/Homepage/searchBar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden  bg-[#6B6783] font-sans ">
      <div className="p-3">
        <SearchBar />
      </div>
      <main className="flex-1 flex flex-col overflow-y-scroll">
        <div className="flex-1 min-h-screen">
          <SongSlider />
          <PlaylistSlider />
          <AlbumSlider />
        </div>
      </main>
      <footer>
        <MusicPlayer />
        <Footer />
      </footer>
    </div>
  );
}
