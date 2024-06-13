"use client"

import Image from "next/image";

export default function Slider({ heading, arr }) {
    return (
        <article className="flex flex-col gap-4">
            <h2 className="font-bold text-3xl capitalize">{heading}</h2>
            <div className="flex gap-2 overflow-x-scroll">
                {arr && arr.map((item, index) => {
                    return (
                        <div key={index} className="min-w-[200px] text-center overflow-x-hidden">
                            <Image src={item.image} alt="image" className="object-cover w-full rounded-lg" height={100} width={100} />
                            <span className="font-bold text-lg whitespace-nowrap capitalize">{item.name.toLowerCase()}</span>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}