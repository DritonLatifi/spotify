"use client"
import { useEffect, useState } from "react";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";
import { MdReplayCircleFilled } from "react-icons/md";
import Cookies from "cookies-js";

let song = {
    artist: "Kendrick Lamar",
    title: "HUMBLE.",
    lengthInSeconds: 180,
}

let image = {
    src: "/kendrick.webp",
    alt: "Description"
}

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [player, setPlayer] = useState(null);

    function pausePlay() {
        setIsPlaying(!isPlaying);
        player.togglePlay();

        if (progress === song.lengthInSeconds) {
            setProgress(0);
            setIsPlaying(true);
        }
    }

    useEffect(() => {
        let interval = null;
        if (isPlaying) {
            interval = setInterval(() => {
                setProgress(prevProgress => prevProgress < song.lengthInSeconds ? prevProgress + 1 : prevProgress);
            }, 1000);
        } else if (!isPlaying && progress !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isPlaying, progress]);

    useEffect(() => {
        if (progress === song.lengthInSeconds) {
            setIsPlaying(false);
        }
    }, [progress]);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {
            console.log(Cookies.get("token"))

            const player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb(Cookies.get("token")); },
                volume: 0.5
            });

            setPlayer(player);

            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
            });

            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.connect();
        };
    }, []);

    return (
        <div className="mx-1 p-1 bg-[#a6a3b4] rounded-xl">
            <div className="grid grid-cols-[50px,_1fr,_50px] items-center">
                <img src={image.src} alt={image.alt} className="w-full aspect-square block rounded-md" />
                <div className="font-bold ml-3">
                    <div className="text-xl">{song.artist}</div>
                    <div className="text-xs">{song.title}</div>
                </div>
                <div className="flex items-center justify-center" onTouchStart={pausePlay}>
                    {isPlaying ?
                        <FaCirclePause className="text-4xl" />
                        : progress === song.lengthInSeconds
                            ? <MdReplayCircleFilled className="text-5xl" />
                            : <FaCirclePlay className="text-4xl" />
                    }
                </div>
            </div>
            <progress max={song.lengthInSeconds} className="w-full h-2 progress-bar" value={progress}></progress>
            <style jsx>{`
                .progress-bar {
                    appearance: none;
                }
                .progress-bar::-webkit-progress-bar {
                    background-color: white;
                    border-radius: 10px;
                }
                .progress-bar::-webkit-progress-value {
                    background-color: #555268;
                    border-radius: 10px;
                }
                .progress-bar::-moz-progress-bar {
                    background-color: #605c75;
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
}
