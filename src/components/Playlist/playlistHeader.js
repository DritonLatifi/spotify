"use client";

import Image from "next/image";
import { IoMdAddCircle } from "react-icons/io";

const profile = [
  {
    name: "Yorick",
    picture: "/kendrick.webp"
  }
];

export default function PlaylistHeader() {
  const userProfile = profile[0];
  

  return (
    <div className="bg-[#555268] flex items-center pb-[3%] pl-[5%] pt-[3%]">
      <Image
        src={userProfile.picture}
        height={100}
        width={100}
        alt={`${userProfile.name} Profile picture`}
        className="rounded"
      />
      <div className="pl-[10%] text-xl font-semibold">
        <h1>{userProfile.name}</h1>
      </div>
      <div className="ml-auto flex items-center pr-[5%]">
      </div>
    </div>
  );
}
