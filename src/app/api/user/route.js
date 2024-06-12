import { NextResponse } from "next/server";

/**
 * @param {Request} req
*/
export async function POST(userReq){
	const token = await userReq.text()

	console.log(token)
	const req = await fetch("https://api.spotify.com/v1/me", {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	const res = await req.json()

	console.log(res)

	return NextResponse.json({content: "bruh"}, {status: 200})
}
