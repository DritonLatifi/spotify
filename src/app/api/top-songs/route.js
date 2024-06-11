import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams
    const cookieStore = cookies()

    const res = await fetch('https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks?limit=' + searchParams.get('limit'), {
        headers: {
            Authorization: 'Bearer ' + cookieStore.get('token').value
        }
    })

    const data = await res.json()

    const test = await data.items.map(obj => {
        return { name: obj.track.name, populartiy: obj.track.popularity, duration: obj.track.duration_ms, artists: obj.track.artists }
    })

    return NextResponse.json(test)
}