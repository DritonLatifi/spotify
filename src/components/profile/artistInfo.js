"use client"

import Image from "next/image";

let ArtistStuff = {
  artistname: "Name placeholder",
  listeners: "Listeners: 2",
  following: "Following: 3",
  followers: "Followers: 4",
}

export default function ArtistInfo() {
  return (
    <>
      <div className="bg-[#6B6783] flex flex-row gap-5 pl-[5%] pb-[5%] pt-[5%]">
        <Image src='/kendrick.webp' alt='image'
          className="object-cover rounded-lg" height={50} width={150} />
        <div className="pl-2">
          <h1 className="font-bold text-3xl capitalize">{ArtistStuff.artistname}</h1>
          <p className="text-base">{ArtistStuff.listeners}</p>
          <p className="text-base">{ArtistStuff.following}</p>
          <p className="text-base">{ArtistStuff.followers}</p>
        </div>
      </div>
    </>
  )
}