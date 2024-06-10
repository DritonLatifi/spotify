import Slider from "@/components/slider";

export default function playlistSlider({ playlists}) {
  return (
  <div>
    <Slider heading={'playlists'} arr={playlists} />
  </div>
  )
}