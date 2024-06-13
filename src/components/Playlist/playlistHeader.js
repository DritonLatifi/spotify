"use client";

import Image from "next/image";

// Profile data, static, can get this from API?
const profile = 
  {
    name: "Yorick",
    picture: "/kendrick.webp"
  };

export default function PlaylistHeader() {
  
  return (
    <div className="bg-[#555268] flex items-center pb-[3%] pl-[5%] pt-[3%]">
      <Image
        src={profile.picture}
        height={100}
        width={100}
        alt={`${profile.name} Profile picture`}
        className="rounded"
      />
      <div className="pl-[10%] text-2xl font-semibold">
        <h1>{profile.name}</h1>
      </div>
      <div className="ml-auto flex items-center pr-[5%]">
      </div>
    </div>
  );
}