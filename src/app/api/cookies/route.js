import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(req) {
    const cookieStore = cookies()

    const searchParams = req.nextUrl.searchParams

    cookieStore.set('token', searchParams.get('token'))

    const res = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${searchParams.get('token')}`
        }
    })

    return NextResponse.json({})
}