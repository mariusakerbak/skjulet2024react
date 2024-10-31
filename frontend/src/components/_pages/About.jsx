import { Link } from "react-router-dom";
import Footer from "../_structure/Footer";
import Header from "../_structure/Header";
import Heading from "../Heading";
import { BiLogoApple, BiLogoFacebookCircle, BiLogoInstagram, BiLogoSpotify, BiLogoYoutube } from "react-icons/bi";

export default function About() {
    return (
        <>
            <Header />
            <main className="w-full max-w-[1000px] mt-10 mr-auto ml-auto flex flex-wrap gap-5 flex-col md:flex-row">
                <Heading text="Hva er Skjulet?" tag="h1" addClass="w-[100%]" />
                <article className="min-w-[400px] max-w-[600px]">
                    <img src="/images/skjulet_about_small600px_.jpg" alt="Marius og Egil i den røde sofaen" />
                    <p>«Skjulet» er en idé startet av Egil Myklestad og Marius Akerbæk, som siden 2016 har vært gode venner, kollegaer og hverandres trygge havn for å slenge ut og bearbeide diverse kreative idéer.</p><p>Gjennom en reise med eget firma, T-skjorte-design og utvikling av web-systemer og media- og markedsføring for kunder gjenoppdaget begge musikk-gleden. Begge har både laget og spilt musikk tidligere, med en pause i en travel arbeids- og familiehverdag.</p><p>Etter hvert ble ekstrajobb byttet med mer og mer musikklaging og skriving. Både Marius og Egil elsker å fortelle historier, og i 2024 ble det første musikalske reisealbumet ferdig!</p><p>Historier fra sofaen har plassert oss i mange verdenshistoriske begivenheter, pg en uskyldig ferietur endte med krig med narkobaroner, tilfeldig oppdage missiler på Cuba, en skogstur i Telemark under andre verdenskrig og en uheldig start av et folkeopprør i Romania, blant annet...</p><p>Etter vi slapp singlene &quot;Bygning i Berlin&quot;, &quot;Krise på Cuba&quot; og &quot;Bucuresti Blues&quot;, fikk vi en hyggelig forespørsel. Tor-David, Marius&apos; skolekompis fra tidligere, hadde hørt musikken, likte konseptet, og sa at dersom vi skulle ha lyst på en bassist, var han tilgengelig. Lang historie kort; Tor har sørget for solid rytmisk forankring av resten av Historier fra sofaen, og stiller med Skjulets beste mustasj!</p><p>Og for å komplettere rytme, fikk vi med vår felles kamerat Morgan. Egil har spilt en del med Morgan tidligere, som også spilte trommer på en av Marius julesanger på 2016-varianten av det lokale initiativet &quot;Jul i Halden&quot;.</p><p>Som et helt band, med en hel plate, setter vi ut på en videre reise med sanger vi er stolt av i 2024 og 2025!</p>
                </article>
                <aside className="flex-grow">
                    <nav className="bg-slate-100 w-full p-3">
                        <p className="text-lg">Hold deg oppdatert, følg oss på</p>
                        <Link className="text-black flex flex-row items-center gap-2" to={`https://www.youtube.com/channel/UC7D-jFfJqu3LHvReXgQ8o-g`}><BiLogoYoutube className="text-black hover:text-lion rounded hover:bg-umber duration-1000 transition ease-in-out" /> YouTube</Link>
                        <Link className="text-black flex flex-row items-center gap-2" to={`https://open.spotify.com/artist/44im0D1VFjAteBS2F25MlG`}><BiLogoSpotify className="text-black hover:text-lion rounded hover:bg-umber duration-1000 transition ease-in-out" /> Spotify</Link>
                        <Link className="text-black flex flex-row items-center gap-2" to={`https://music.apple.com/us/artist/skjulet/1541021743`}><BiLogoApple className="text-black hover:text-lion rounded hover:bg-umber duration-1000 transition ease-in-out" /> Apple Music</Link>
                        <Link className="text-black flex flex-row items-center gap-2" to={`https://www.instagram.com/guttaiskjulet/`}><BiLogoInstagram className="text-black hover:text-lion rounded hover:bg-umber duration-1000 transition ease-in-out"/> Instagram</Link>
                        <Link className="text-black flex flex-row items-center gap-2" to={`https://www.facebook.com/guttaiskjulet`}><BiLogoFacebookCircle className="text-black hover:text-lion rounded hover:bg-umber duration-1000 transition ease-in-out" /> Facebook</Link>
      
                    </nav>
                </aside>
            </main>
            <Footer />
        </>
    )
}