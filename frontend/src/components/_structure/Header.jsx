import { BiLogoApple, BiLogoFacebookCircle, BiLogoInstagram, BiLogoSpotify, BiLogoYoutube } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Header() {
    return (<header className="bg-black flex flex-col md:flex-row justify-between items-center p-3 sticky top-0">
          <Link to={`/`}><img src="/images/skjulet_logo_hvit.svg" className="w-[200px]" alt="Skjulet" /></Link>
          <nav className="flex flex-row justify-between items-center">
            <Link to={`https://www.youtube.com/channel/UC7D-jFfJqu3LHvReXgQ8o-g`}><BiLogoYoutube className="hover:text-lion rounded hover:bg-umber duration-1000 transition ease-in-out" /></Link>
            <Link to={`https://open.spotify.com/artist/44im0D1VFjAteBS2F25MlG`}><BiLogoSpotify className="hover:text-lion rounded hover:bg-umber duration-1000 transition ease-in-out" /></Link>
            <Link to={`https://music.apple.com/us/artist/skjulet/1541021743`}><BiLogoApple className="hover:text-lion rounded hover:bg-umber duration-1000 transition ease-in-out" /></Link>
            <Link to={`https://www.instagram.com/guttaiskjulet/`}><BiLogoInstagram className="hover:text-lion rounded hover:bg-umber duration-1000 transition ease-in-out"/></Link>
            <Link to={`https://www.facebook.com/guttaiskjulet`}><BiLogoFacebookCircle className="hover:text-lion rounded hover:bg-umber duration-1000 transition ease-in-out" /></Link>
          </nav>
          <nav className="flex flex-row justify-between items-center">
            <Link to={`/sangbok`} className="rounded hover:bg-umber duration-1000 transition ease-in-out p-2">Sangene</Link>
            <Link to={`/om`} className="rounded hover:bg-umber duration-1000 transition ease-in-out p-2">Om Skjulet</Link>
          </nav>
        </header>)
}