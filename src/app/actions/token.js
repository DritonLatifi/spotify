"use client"

import Cookies from 'cookies-js'

export function getToken(){
    return Cookies.get('token')
}