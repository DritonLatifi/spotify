"use client";

import Image from "next/image";

export default function Slider({ heading, arr }) {
    return (
        <article className="flex flex-col gap-4">
            <h2 className="font-bold text-3xl capitalize pl-4">{heading}</h2>
            <div className="flex gap-2 overflow-x-scroll">
                {arr.map((track, index) => {
                    return (
                        <div key={index} className="min-w-[150px] text-center overflow-x-hidden">
                            <Image src={track.cover} alt="Track Cover" className="object-cover w-full rounded-lg" height={100} width={100} />
                            <span className="font-bold text-lg whitespace-nowrap">{track.title}</span>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}
