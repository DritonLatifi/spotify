"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  const [searchResult, setSearchResult] = useState([])

  const ref = useRef(null)
  const searchRef = useRef(null)

  async function changeHandler(e) {
    if (e.target.value.length > 0) {
      searchRef.current.style.height = '500px'

      const res = await fetch('api/search?type=track&q=' + e.target.value)
      const data = await res.json()

      setSearchResult(data.tracks.items)
    } else {
      searchRef.current.style.height = '0px'
    }
  }

  return (
    <div ref={ref} className="w-5/6 mx-auto py-2 pl-4 mt-4 bg-white text-black rounded-full flex items-center">
      <input type="search" onChange={changeHandler} className="bg-inherit w-full outline-none border-none w-[90%]" placeholder="Madison Beer.."></input>
      <IoSearch />
      <div ref={searchRef} className="absolute top-[7.5%] flex flex-col w-5/6 mt-7 bg-black transition-all duration-1000 text-white overflow-y-scroll overflow-x-hidden">
        {searchResult.map(obj => {
          return (
            <div className="flex gap-10 items-center">
              <Image src={obj.album.images[0].url} alt="image" height={100} width={100} />
              <span>{obj.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
