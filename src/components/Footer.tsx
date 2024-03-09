import image from "/images/logo-inmobiliaria.png";
import CopyrightIcon from "@mui/icons-material/Copyright";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import PhoneIcon from "@mui/icons-material/Phone";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import listaNav from "../helpers/listasDinamicas";

const lista = listaNav();

export const Footer = () => {
  return (
    <div className="flex-col bg-colorLogo h-72 w-full pt-5 px-20 ">
      <div className="w-full flex justify-center">
        <img className="h-24 pl-2 " src={image} alt="" />
      </div>
      <span className="flex justify-center font-bold pb-3 text-md">
        jesicaortizestudioinmobiliario@gmail.com
      </span>
      <div className="border-b border-gray-500"></div>
      <ul className="flex justify-center mb-8">
        {lista.map((list) => (
          <li
            key={list.title}
            className="font-bold flex h-fit justify-center my-3 mx-1 px-4"
          >
            {list.title}
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center">
        <p className="font-semibold h-full flex items-center">
          <span className="pr-2 items-center">
            <CopyrightIcon />
          </span>
          <span className="italic"> Jesica Ortiz Inmobiliaria. </span>
          <span className="pl-1">
            {" "}
            Calle 70 N° 3026, Necochea CP 7630 | Tel: +54 92262-240370
          </span>
        </p>
      </div>
    </div>
  );
};
