import { useEffect, useState } from "react";
import Footer from "../_structure/Footer";
import Header from "../_structure/Header";
import { fetchGPVideos } from "../../../sanity/services/videoServices";

export default function Frontpage() {
    const [videos, setVideos] = useState(null)

  const getVideos = async () => {
    const data = await fetchGPvideos()
    setVideos(data)
  }

  useEffect(() => {
    getVideos()
  }, [])

  console.log(videos)
    return (
        <>
        <Header />
        <h1>Frontpage</h1>
        <Footer />
        </>
    )
}