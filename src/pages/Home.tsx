import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { Main } from "../components/Main";
import { LuDoorOpen } from "react-icons/lu";
import { PiToilet } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";
import { GiHomeGarage } from "react-icons/gi";
import { IoKeyOutline } from "react-icons/io5";
import { RxDimensions } from "react-icons/rx";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Button, Input, Textarea } from "@nextui-org/react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { Ambientes } from "../components/Ambientes";
import { Caracteristicas } from "../components/Caracteristicas";

export const Home = () => {
  const items = [
    "Living-Comedor",
    "Dormitorio",
    "Placard",
    "Lavadero",
    "Piscina",
  ];
  const icons = [
    { icon: <IoKeyOutline size={45} className="pr-3"/> , title: "Cod. Propiedad" },
    { icon: <LuDoorOpen size={45} className="pr-3"/>, title: "Ambientes" },
    { icon: <IoBedOutline size={45} className="pr-3"/>, title: "Dormitorios" },
    { icon: <PiToilet size={45} className="pr-3"/>, title: "Baños" },
    { icon: <GiHomeGarage size={45} className="pr-3"/>, title: "Cocheras" },
    { icon: <RxDimensions size={45} className="pr-3"/>, title: "Sup. Total" },
  ];
  return (
    <>
      <Layout clases="w-full min-h-screen flex flex-col justify-between">
        <Header />
        <Main clases="w-full flex flex-col pt-32 bg-gray-100">
          <div className="flex  h-[40%] pl-8 items-center pt-3 justify-between">
            <span className="flex">
            <p className="bg-red-500 text-white font-bold w-fit px-4 py-1 rounded-lg mr-3">
              VENTA
            </p>

            <p className="text-xl font-semibold">BERUTI AL 2500 PISO 6</p>
            </span>
          <span className="pr-4 text-xl font-bold">U$S 92.000.-</span>
          </div>
          <p className="pl-8 py-2 text-lg font-semibold">
            DEPARTAMENTO EN VENTA B.NORTE / C.A.B.A.
          </p>
          <p className="pl-8 text-lg font-semibold ">3 AMBIENTES</p>
          <div className=" h-[40%]">imagenes</div>
          <div className="flex justify-center h-[60%] w-full ">
            <div className="px-4 w-[70%]  flex flex-col ">
              <p className="pt-3 text-sm font-bold text-red-500">
                CARACTERÍSTICAS GENERALES
              </p>
              <ul className="flex justify-center space-x-8 items-center bg-gray-100 h-[85px] mt-3">
                {icons.map((icon, index) => (
                  <Caracteristicas key={index} title={icon.title} comp={icon.icon}  />
                ))}

                {/* <span className="flex items-center">
                  <IoKeyOutline  />
                  <span className="flex flex-col items-center">
                    <li className="leading-tight">Cod. Propiedad</li>
                    <p className="font-bold w-full leading-tight">5</p>
                  </span>
                </span>
                <span className="flex  items-center">
                  <LuDoorOpen size={45} className="pr-3" />
                  <span className="flex flex-col  items-center">
                    <li className="leading-tight"> Ambientes</li>
                    <p className="font-bold w-full leading-tight">5</p>
                  </span>
                </span>
                <span className="flex  items-center">
                  <IoBedOutline size={45} className="pr-3" />
                  <span className="flex flex-col  items-center">
                    <li className="leading-tight"> Dormitorios</li>
                    <p className="font-bold w-full leading-tight">5</p>
                  </span>
                </span>
                <span className="flex  items-center">
                  <PiToilet size={45} className="pr-3" />
                  <span className="flex flex-col  items-center">
                    <li className="leading-tight"> Baños</li>
                    <p className="font-bold w-full leading-tight">5</p>
                  </span>
                </span>
                <span className="flex  items-center">
                  <GiHomeGarage size={45} className="pr-3" />
                  <span className="flex flex-col items-center">
                    <li className="leading-tight"> Cocheras</li>
                    <p className="font-bold w-full leading-tight">5</p>
                  </span>
                </span>
                <span className="flex  items-center">
                  <RxDimensions size={45} className="pr-3" />
                  <span className="flex flex-col  items-center">
                    <li className="leading-tight">Sup. Total</li>
                    <p className="font-bold w-full leading-tight">5</p>
                  </span>
                </span> */}
              </ul>
              <div className=" w-full pt-4">
                <p className="pt-3 text-sm font-bold text-red-500">
                  AMBIENTES Y EXPANSIONES
                </p>
                <div className="pr-4 w-full  flex flex-wrap bg-gray-100items-center h-[100px] mt-3">
                  {items.map((item) => (
                    <Ambientes key={item} title={item} />
                  ))}
                </div>
                <div className="pt-3 flex flex-col">
                  <p className="pt-3 text-sm font-bold text-red-500">
                    DESCRIPCIÓN
                  </p>
                  <p className="pt-3">
                    SEMIPISO 3 AMBIENTES. EXPENSAS: $ 17.000.-. CONTRAFRENTE. 67
                    M2 + BAULERA DE 2 M2. IMPECABLE. VISTA ABIERTA. TODO SOL.
                    DOBLE ENTRADA CON PUERTAS BLINDADAS. AMPLIO LIVING. BAÑO
                    COMPLETO + TOILETTE. COCINA COMPLETA. 3 PLACARDS. SERVICIOS
                    CENTRALES POR CALDERA DUAL. LAVADERO INCORPORADO. PISOS DE
                    PARQUET. TODO DOBLE VIDRIO DVH. EDIFICIO DE 11 PISOS, 2
                    ASCENSORES.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white w-[30%]">
              <div className="w-full flex flex-col gap-4  px-7 mt-4 mr-2 ">
                <h1 className="font-bold text-2xl">
                  ¿Te intersa? Contactate ahora
                </h1>
                <div className="flex-col w-full ">
                  <Input
                    isRequired
                    type="text"
                    variant="underlined"
                    label="Nombre"
                  />
                  <Input
                    isRequired
                    type="text"
                    variant="underlined"
                    label="Teléfono"
                  />
                  <Input
                    isRequired
                    type="email"
                    variant="underlined"
                    label="E-mail"
                  />
                </div>
                <Textarea
                  maxRows={5}
                  isRequired
                  variant="underlined"
                  labelPlacement="outside"
                  placeholder="Me interesa esta propiedad..."
                  maxLength={500}
                  label="Mensaje"
                  className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                />
                <Button radius="sm" className="my-5 py-7 font-semibold text-lg">
                  ENVIAR MENSAJE
                </Button>
              </div>
              <div className="w-full px-7 ml-2">
                <p className="flex justify-center mb-3">O también</p>
                <Button
                  radius="sm"
                  className="w-full py-7 my-2 text-xl font-semibold"
                  startContent={<PhoneIcon sx={{ fontSize: 80 }} />}
                >
                  +54 9 2262-240370
                </Button>
                <Button
                  radius="sm"
                  className="w-full py-7 my-2 text-sm font-semibold"
                  startContent={<MailOutlineIcon sx={{ fontSize: 80 }} />}
                >
                  jesicaortizestudioinmobiliario@gmail.com
                </Button>
              </div>
            </div>
        
          </div>
          <div className="bg-white">
           
          </div>
        </Main>
        <Footer />
      </Layout>
    </>
  );
};
