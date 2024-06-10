import Slider from "@/components/slider";

export default function AlbumSlider({ albums }) {
  return (
    <div>
      <Slider heading={'albums'} arr={albums} />
    </div>
  );
}
