"use client"
import Cookies from "cookies-js"
import "@/app/globals.css"
import SpotifyWebPlayer from "react-spotify-web-playback";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-background">
        {children}
      <SpotifyWebPlayer token={Cookies.get("token")} uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']} />
      </body>
    </html>
  );
}
