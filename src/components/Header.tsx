import { Nav } from "./Nav";
// import image from '/public/images/jesica-ortiz-inmobiliaria.svg';
import image from '/images/logo-inmobiliaria.png';
interface listaNav{
  lista:string[]
}
export const Header = ({lista}:listaNav) => {
  return (
    <header className="flex h-24 bg-colorLogo fixed w-full shadow-lg z-50 ">
        <div className="w-1/4">
            <img className="h-24 pl-2 " src={image} alt="" />
        </div>
        <Nav lista={lista} />
    </header>
  )
}
