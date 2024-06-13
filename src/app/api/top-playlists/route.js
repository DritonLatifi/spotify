import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req) {
    const cookieStore = cookies()

    const res = await fetch('https://api.spotify.com/v1/browse/featured-playlists', {
        headers: {
            Authorization: 'Bearer ' + cookieStore.get('token').value
        }
    })

    const data = await res.json()

    return NextResponse.json(data.playlists.items.map(obj => {
        return { type: 'playlist', name: obj.name, image: obj.images[0].url }
    }))
}    