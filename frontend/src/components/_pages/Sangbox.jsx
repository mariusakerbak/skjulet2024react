import { useEffect, useState } from "react";
import { fetchDisco } from "../../sanity/services/discoServices";
import Heading from "../Heading";
import { Link } from "react-router-dom";
import Header from "../_structure/Header";
import Footer from "../_structure/Footer";

export default function Songbook() {
    const [disco, setDisco] = useState(null)

    const getDisco = async () => {
        const data = await fetchDisco()
        setDisco(data)
    }

    useEffect(() => {
        getDisco()
    }, [])

    console.log(disco)

    

    return (
        <>
    <Header />
        <main   >
            <section className="w-full max-w-[1000px] mr-auto ml-auto mt-10">
                <Heading text={"Sangbok"} tag="h1" />
                {disco?.map((album, index) => <article key={index} className="bg-slate-200 p-5 mt-3 rounded-md flex gap-4 flex-col md:flex-row">
                    <img className="rounded-md max-w-[500px] h-auto" src={album.cover}  />
                    <div>
                        <h2 className="text-4xl mb-3 text-black"><span className="text-sm w-full block">{album.publishyear}</span>{album.title}</h2>
                        <ul>
                            {album.songs?.map((song, index) => <li key={index} className="mb-1 h-8"><Link className="flex flex-row gap-2 items-center h-8 text-black hover:bg-lion rounded-l-full rounded-r-md hover:text-white transition-all" to={`/sangbok/${song.slug.current}`}><span className="rounded-full bg-blue text-white w-8 h-8 flex justify-center items-center">{index + 1} </span>{song.title}</Link></li>)}
                        </ul>
                    </div>
                </article>)}
            </section>
        </main>
    <Footer />
    </>)
}