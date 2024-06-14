"use client";

import { TiHomeOutline } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { PiPlaylistDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

export default function Footer() {
  return (
    <div className="flex justify-between p-4 bg-[#403d4e] text-black w-[100%]">
      <TiHomeOutline size={30} onClick={() => console.log('Home clicked')}/>
      <IoSearch size={30} onClick={() => console.log('Search clicked')}/>
      <PiPlaylistDuotone size={30} onClick={() => console.log('Playlist clicked')}/>
      <CgProfile size={30} onClick={() => console.log('Profile clicked')}/>
    </div>
  );
}