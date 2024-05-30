"use client"

import Image from "next/image";

export default function Slider({ heading, arr }) {
    return (
        <article className="flex flex-col gap-4">
            <h2 className="font-bold text-3xl capitalize">{heading}</h2>
            <div className="flex gap-2 overflow-x-scroll">
                {arr.map((track, index) => {
                    return (
                        <div key={index} className="min-w-[150px] text-center">
                            <Image src='/kendrick.webp' alt="image" className="object-cover w-full rounded-lg" height={100} width={100} />
                            <span className="font-bold text-lg text-[#E5D4ED]">{track}</span>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}