import { NextResponse } from "next/server"
import { cookies } from "next/headers"

const cookieStore = cookies()

export async function POST(req) {

    const searchParams = req.nextUrl.searchParams

    cookieStore.set('token', searchParams.get('token'))

    const res = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${searchParams.get('token')}`
        }
    })

    console.log(res)

    return NextResponse.json({})
}

export async function GET() {
    const cookie = cookieStore.get('token')

    return NextResponse.json({cookie})   
}