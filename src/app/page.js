"use client"

import Slider from "@/components/slider";

export default function Home() {
  const dummyArray = new Array(5).fill('Kendrick Lamar')

  return (
    <main>
      <div className="flex flex-col gap-4 pl-4 pt-4">
      <Slider heading={'songs'} arr={dummyArray} />
      <Slider heading={'playlist'} arr={dummyArray} />
      <Slider heading={'albums'} arr={dummyArray} />
      </div>
    </main>
  )
}
