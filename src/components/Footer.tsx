import image from "/images/logo-inmobiliaria.png";
import CopyrightIcon from "@mui/icons-material/Copyright";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
interface listaNav {
  lista: string[];
}
export const Footer = ({ lista }: listaNav) => {
  return (
    <div className="flex-col bg-colorLogo h-72 mt-3 w-full pt-5 px-20 bottom-0 left-0">
      <div className="w-full flex justify-center">
        <img className="h-24 pl-2 " src={image} alt="" />
      </div>
      <span className="flex justify-center font-bold pb-3 text-md">
        jesicaortizestudioinmobiliario@gmail.com
      </span>
      <div className="border-b border-gray-500"></div>
      <ul className="flex justify-center mb-8">
        {lista.map((title) => (
          <li
            key={title}
            className="font-bold flex h-fit justify-center my-3 mx-1 px-4"
          >
            {" "}
            {title}
          </li>
        ))}
      </ul>

      {/* <div className="flex justify-center  pb-5 space-x-12">
       */}
      {/* <div className="flex items-center">
          <span className="flex justify-center pr-3">
            <PhoneIcon sx={{ fontSize: 40 }} />
          </span>
          <p className="font-semibold" >+54 9 2262-240370</p>
        </div>
        <div className="flex items-center">
          <span className="flex justify-center pr-3">
            <MailOutlineIcon sx={{ fontSize: 40 }} />
          </span>
          <p className="font-semibold"> jesicaortizestudioinmobiliario@gmail.com</p>
        </div>
        <div className="flex items-center">
          <span className="flex justify-center pr-2">
            <LocationOnIcon sx={{ fontSize: 40 }} />
          </span>
          <p className="font-semibold"> 70 3026</p>
        </div> */}
      {/* </div> */}
      {/* <ul className="flex justify-center">
        {lista.map((title) => (
          <li
            key={title}
            className="font-bold flex h-fit justify-center my-3 mx-1 px-4"
          >
            {" "}
            {title}
          </li>
        ))}
      </ul> */}

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
