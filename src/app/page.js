import PlaylistContent from "@/components/Playlist/songList";
import Footer from "@/components/footer";
import MusicPlayer from "@/components/musicPlayer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden  bg-[#6B6783] font-sans ">
      <main className="flex-1 flex flex-col overflow-y-scroll">
        <div className="flex-1 min-h-screen">
        <PlaylistContent />
        </div>
      </main>
      <footer>
        <MusicPlayer />
        <Footer />
      </footer>
    </div>
  );
}
