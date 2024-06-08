"use client"

import { useEffect } from "react"
import Cookies from "cookies-js"

export default function Callback({ searchParams }) {
    useEffect(() => {
        fetch('api/login?code=' + searchParams.code)
            .then(res => res.json())
            .then(data => {
               if(data.data?.access_token){
                   let {access_token} = data.data
                   checkIfPremium(access_token)

               }
            })
    }, [])

    async function checkIfPremium(token){
        const req = await fetch("https://api.spotify.com/v1/me", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const res = await req.json();

        Cookies.set("tier", res.product)

    }



    return null
}