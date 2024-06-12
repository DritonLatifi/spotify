import MusicPlayer from "@/components/musicPlayer";
import Slider from "@/components/slider";
import PlaylistContent from "@/components/playlistContent";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <main>
        <PlaylistContent />
        <MusicPlayer/>
        <Footer/>
      </main>
    </div>
  );
}
