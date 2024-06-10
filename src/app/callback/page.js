"use client"

import { useEffect } from "react"
import { useRouter } from 'next/navigation'

export default function Callback({ searchParams }) {
    const router = useRouter()

    useEffect(() => {
        fetch('api/login?code=' + searchParams.code)
            .then(res => {
                if (res.status !== 200) {
                    console.log("Login Failed")
                }
            })
    }, [])

    // router.push('/')

    return null
}