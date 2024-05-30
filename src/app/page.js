"use client"

import Slider from "@/components/slider";

export default function Home() {
  const dummyArray = new Array(5).fill('Kendrick Lamar')

  return (
    <main className="bg-[#6B6783]">
      <div className="flex flex-col gap-6 pl-4 pt-4">
        <Slider heading={'songs'} arr={dummyArray} />
        <Slider heading={'playlist'} arr={dummyArray} />
        <Slider heading={'albums'} arr={dummyArray} />
      </div>
    </main>
  )
}
