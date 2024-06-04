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
      <div className="bg-[#6B6783] flex flex-row gap-10 p-10">
        <Image src='/kendrick.webp' alt='image'
          className="" height={100} width={100} />
        <div>
          <h1 className="text-xl">{ArtistStuff.artistname}</h1>
          <p className="text-base">{ArtistStuff.listeners}</p>
          <p className="text-base">{ArtistStuff.following}</p>
          <p className="text-base">{ArtistStuff.followers}</p>
        </div>
      </div>
    </>
  )
}