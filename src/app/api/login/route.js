import { NextResponse } from "next/server";

const { cookies } = require("next/headers")

export const dynamic = 'force-dynamic'

export async function GET(req) {
    const cookieStore = cookies()

    const searchParams = req.nextUrl.searchParams

    console.log(searchParams.code);

    const res = await fetch(`https://accounts.spotify.com/api/token?code=${searchParams.code}&redirect_uri=${process.env.REDIRECT_URI}&grant_type=authorization_code`, {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET)
        }
    })

    const data = await res.json()

    return NextResponse.json({ data })
}