import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
    const cookieStore = cookies()
    const searchParams = req.nextUrl.searchParams

    const res = await fetch(`https://accounts.spotify.com/api/token?code=${searchParams.get('code')}&redirect_uri=${process.env.REDIRECT_URI}&grant_type=authorization_code`, {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET)
        }
    })

    const data = await res.json()

    if(!data.access_token){
        return NextResponse.json({message: `Error getting access token: ${data.error}`})
    }

    cookieStore.set("token", data.access_token)

    return NextResponse.json({ data })
}