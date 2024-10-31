import { Link, useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import Heading from "../Heading";
import urlForImage from "../helpers/urlForImage";
import { useEffect, useState } from "react";
import { fetchSong } from "../../sanity/services/discoServices";
import Header from "../_structure/Header";
import Footer from "../_structure/Footer";

export default function SongDetails() {
    const {slug} = useParams()
    const [song, setSong] = useState(null)

    async function getSong(slug) {
        const data = await fetchSong(slug)
        setSong(data)
    }
    
    useEffect(() => {
        getSong(slug)
    }, [slug])

    console.log(slug)
    console.log(song)

    const PortableTextComponents = {
        block: {
            h2: ({node, children}) => <h2 id={`h${node._key}`}>{children}</h2>,
            h3: ({node, children}) => <h3 id={`h${node._key}`}>{children}</h3>,
            h4: ({node, children}) => <h4 id={`h${node._key}`}>{children}</h4>,
        },
        types: {
            image: ({ value }) => {
                if(!value?.asset?._ref) {
                    return null
                }
                return(
                    <img 
                        alt={value.alt || ' '} 
                        loading="lazy" 
                        src={urlForImage(value).fit('max').auto('format')}
                    />
                )
            },
            fieldset: ({value}) => {
                if(!value.title) {
                    return null
                }
  
                return(
                    <fieldset>
                        <legend>{value.title}</legend>
                        <p>{value.content}</p>
                    </fieldset>
                )
            }
        }
    }
    if(song) {
    return (
    <><Header />
    <main><article className="w-full max-w-[1000px] mr-auto ml-auto mt-5 text-left">
            <Link className="bg-slate-200 text-slate-600 p-2 rounded-md" to="/sangbok">&laquo; Tilbake til sangboka</Link>
            <header className="flex gap-2 items-center mt-3 border-b-2 border-b-slate-100">
                <img src={`/images/markericons/${song.markerfile}`} className="w-[64px] h-auto ml-5"  />
                <Heading tag="h1" text={song.title} />
            </header>
            <div className="flex flex-col md:flex-row justify-between gap-2">
                <div className="min-w-[400px] max-w-[600px]">
                    <PortableText value={song.lyrics} components={PortableTextComponents} />
                </div>
                <div className="w-full bg-slate-100 p-2 max-w-[400px]">
                    {song?.spotify ? <div className="w-full p-3 mb-3"><iframe style={{ borderRadius: "12px" }} src={song.spotify} width="100%" height="152" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div> : null}
                    <section>
                        <h2 className="text-xl">Flere sanger fra {song.album.title}</h2>
                        <ul className="mt-2 mb-4">
                            {song.album.songs?.map((s, index) => <li key={index} className="mb-1 h-8"><Link className="flex flex-row gap-2 items-center h-8 hover:bg-lion rounded-l-full rounded-r-md hover:text-white transition-all" to={`/sangbok/${s.slug.current}`}><span className="rounded-full bg-blue text-white w-6 h-6 text-sm flex justify-center items-center">{index + 1} </span>{s.title}</Link></li>)}
                        </ul>

                    </section>
                </div>

            </div>


        </article></main><Footer /></>)
    } else {
        return (<><Header /><main><p>Laster sang...</p></main><Footer /></>)
    }
}
