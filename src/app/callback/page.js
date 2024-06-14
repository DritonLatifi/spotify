"use client"

import { useRouter } from 'next/navigation'

export default function Callback({ searchParams }) {
    const router = useRouter()

    fetch('api/login?code=' + searchParams.code)
        .then(res => {
            if (res.status !== 200) {
                console.log("Login Failed")
            } else {
                console.log('Login Successful');
            }
        })
        .finally(function() {
            router.push('/')
        })


    return null
}