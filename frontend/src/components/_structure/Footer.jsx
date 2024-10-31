import { BiLogoApple, BiLogoFacebookCircle, BiLogoInstagram, BiLogoSpotify, BiLogoYoutube } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Footer() {
    return (<footer className="w-full flex-col md:flex-row mx-auto flex justify-items-center min-h-[400px] mt-[100px] bg-black md:pt-5 md:pl-5 md:pr-5">
      <aside className="w-full md:w-[500px] mr-0 md:mr-10">
        <iframe className="mb-10" src="https://open.spotify.com/embed/artist/44im0D1VFjAteBS2F25MlG?utm_source=generator&theme=0" width="100%" height="452"  allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </aside>
    <div className="relative w-full md:w-[500px]">
      <img src="/images/experience.png" className="bg-transparent relative md:absolute bottom-0 right-0" alt="Gutta i skjulet" />
    </div>
    <article className="flex-auto bg-lion md:rounded-t-lg p-4">
      <Link to={`/`}><img src="/images/skjulet_logo_hvit.svg" alt="Skjulet" /></Link>
      <p>Følg oss:</p>
      <nav className="flex">
        <Link to={`https://www.youtube.com/channel/UC7D-jFfJqu3LHvReXgQ8o-g`}><BiLogoYoutube className="hover:text-lion rounded hover:bg-umber duration-1000 transition ease-in-out" /></Link>
        <Link to={`https://open.spotify.com/artist/44im0D1VFjAteBS2F25MlG`}><BiLogoSpotify className="hover:text-lion rounded hover:bg-umber duration-1000 transition ease-in-out" /></Link>
        <Link to={`https://music.apple.com/us/artist/skjulet/1541021743`}><BiLogoApple className="hover:text-lion rounded hover:bg-umber duration-1000 transition ease-in-out" /></Link>
        <Link to={`https://www.instagram.com/guttaiskjulet/`}><BiLogoInstagram className="hover:text-lion rounded hover:bg-umber duration-1000 transition ease-in-out"/></Link>
        <Link to={`https://www.facebook.com/guttaiskjulet`}><BiLogoFacebookCircle className="hover:text-lion rounded hover:bg-umber duration-1000 transition ease-in-out" /></Link>
      </nav>
      <p className="mt-10">Ta kontakt på gutta@skjulet.no!</p>
    </article>
    
  </footer>
  )
}