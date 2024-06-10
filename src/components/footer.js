"use client";

import { TiHomeOutline } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { PiPlaylistDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-between p-4 bg-[#403d4e] text-black">
      <TiHomeOutline size={30} />
      <CiSearch size={30} />
      <PiPlaylistDuotone size={30} />
      <CgProfile size={30} />
    </footer>
  );
}
