
import { Nav } from "./Nav";
// import image from '/public/images/jesica-ortiz-inmobiliaria.svg';
import image from '/images/logo-inmobiliaria.png';
import { NavLink } from "react-router-dom";


export const Header = () => {
  return (
    <header className="flex h-24 bg-colorLogo fixed w-full shadow-lg z-50">
        <div className="w-1/4">
        <NavLink to={"/"}>
          <img className="h-24 pl-2 " src={image} alt="" />
          </NavLink>
            
        </div>
        <Nav />
    </header>
  )
}
