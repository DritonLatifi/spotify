"use client"

import { getToken } from "./actions/token";
import { useEffect, useState } from "react";

export default function Home() {
  const scope = [
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-library-read',
    'user-library-modify',
    'user-read-playback-state',
    'user-modify-playback-state'
  ].join('%20')
  const token = getToken()
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function getUserInfo(){
      console.log("getUserInfo")
      const req = await fetch("api/user",{
        method: "post",
        body: token
      })
      const res = await req.json() 
      setUser(res)
      console.log(user)
    }
    getUserInfo()
  }, [])

  return (
    <>
      <h1>hello!</h1>
     <main className="bg-[#6B6783]">
       {<a href={`https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&scope=${scope}`}>

         Spotify Login
       </a>}
     </main>
    </>
  )
}
