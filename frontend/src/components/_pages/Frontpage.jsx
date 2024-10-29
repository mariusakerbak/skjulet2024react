import { useEffect, useState } from "react";
import Footer from "../_structure/Footer";
import Header from "../_structure/Header";
import { fetchGPVideos } from "../../sanity/services/videoServices";
import { Link } from "react-router-dom";
import FPVideo from "../fpvideo";
import Heading from "../Heading";
import { BiLogoYoutube } from "react-icons/bi";

export default function Frontpage() {
    const [videos, setVideos] = useState(null)

    const getVideos = async () => {
        const data = await fetchGPVideos()
        setVideos(data)
    }

    useEffect(() => {
        getVideos()
    }, [])

    console.log(videos)
    
    return (
        <>
        <Header />
        <main>
          <section id="hero" className="flex justify-center">
            <article className="flex flex-col max-w-[400] text-center mt-[100px] md:mt-0">
              <img src="/images/title.png" width={500} height={200} />
              <p>Ute nå på alle platformer der du kan høre musikk!</p>
             
            </article>
          </section>
          <section id="frontpage-musicvideos" className="flex flex-wrap gap-8 py-8 px-4 bg-blue">
            <Heading tag="h2" text="Siste fra Skjulet på YouTube" addClass="w-full  block justify-self-stretch text-center" />
            {
              videos ? 
              videos.map((v, i) => <FPVideo key={i} id={v.ytid} title={v.title} />) :
              <p>Laster inn videoer...</p>
              
            }
            <div className="w-full justify-self-stretch text-center flex justify-center items-center">
              <Link to="https://www.youtube.com/channel/UC7D-jFfJqu3LHvReXgQ8o-g" className="bg-black text-white rounded p-5 text-center flex gap-4 justify-between"><BiLogoYoutube className="w-[32px]" /> Se flere videoer på YouTube</Link>
            </div>
          </section>
        </main>
        <Footer />
        </>
    )
}