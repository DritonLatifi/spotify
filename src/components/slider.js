import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function Slider({ heading, arr }) {
    return (
        <article className="pl-[5%] pr-4 flex flex-col gap-4">
            <h2 className="font-bold text-3xl capitalize">{heading}</h2>
            <div className="flex gap-2 overflow-x-scroll">
                {arr.map((track, index) => {
                    return (
                        <div key={index} className="min-w-[28%] text-center overflow-x-hidden relative group">
                            <div className="relative">
                                <Image
                                    src={track.cover}
                                    alt="Track Cover"
                                    className="object-cover w-full rounded-lg"
                                    height={100}
                                    width={100}
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <FaPlay size={30} className="text-[#555268]"/>
                                </div>
                            </div>
                            <span className="font-bold text-lg whitespace-nowrap">{track.title}</span>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}