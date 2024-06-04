"use client"

import { redirect } from "next/navigation"
import { useEffect } from "react"

export default function Callback({ searchParams }) {
    useEffect(() => {
        fetch('https://scaling-space-potato-wr77pq544gqcv4jq-3000.app.github.dev/api/login?code=' + searchParams.code)
    }, [])


    // redirect('/')

    return null
}