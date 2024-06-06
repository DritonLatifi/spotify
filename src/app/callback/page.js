"use client"

import { useEffect } from "react"

export default function Callback({ searchParams }) {
    useEffect(() => {
        fetch('api/login?code=' + searchParams.code)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])


    // redirect('/')

    return null
}