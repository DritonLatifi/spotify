import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req) {
    const cookieStore = cookies()

    const searchParams = req.nextUrl.searchParams

    const res = await fetch(`https://api.spotify.com/v1/search?q=${searchParams.get('q')}&type=${searchParams.get('type')}&include_external=audio`, {
        headers: {
            Authorization: 'Bearer ' + cookieStore.get('token').value
        }
    })

    const data = await res.json()

    return NextResponse.json(data)
}