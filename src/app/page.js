"use client"

const scopes = "streaming%20user-read-email%20user-read-private%20user-read-playback-state%20user-modify-playback-state"
export default function Home() {
  
  return (
      <a href={`https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&scope=${scopes}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}`}>
        Spotify Login
      </a>
  )
}
