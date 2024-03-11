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
// import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Button, Image, Input, Textarea } from "@nextui-org/react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { Ambientes } from "../components/Ambientes";
import { Caracteristicas } from "../components/Caracteristicas";
import { ImagesHome } from "../components/ImagesHome";
// import { IoLocationOutline } from "react-icons/io5";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { useRef } from "react";
export const Home = () => {
  const items = [
    "Living-Comedor",
    "Dormitorio",
    "Placard",
    "Lavadero",
    "Piscina",
  ];
  const icons = [
    {
      icon: <IoKeyOutline size={45} className="pr-3" />,
      title: "Cod. Propiedad",
    },
    { icon: <LuDoorOpen size={45} className="pr-3" />, title: "Ambientes" },
    { icon: <IoBedOutline size={45} className="pr-3" />, title: "Dormitorios" },
    { icon: <PiToilet size={45} className="pr-3" />, title: "Baños" },
    { icon: <GiHomeGarage size={45} className="pr-3" />, title: "Cocheras" },
    { icon: <RxDimensions size={45} className="pr-3" />, title: "Sup. Total" },
  ];
  const ubicacionRef = useRef<HTMLDivElement>(null);
  function scrollToLocation() {
    if (ubicacionRef.current) {
      const offset = 110; // Ajusta el valor según sea necesario
      const elementPosition = ubicacionRef.current.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  }

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
            <span className="pr-8 text-2xl font-bold ">U$S 92.000.-</span>
          </div>
          <p className="pl-8 py-2 text-lg font-semibold">
            DEPARTAMENTO EN VENTA B.NORTE / C.A.B.A.
          </p>
          <p className="pl-8 text-lg font-semibold pb-4">3 AMBIENTES</p>

          <div className="flex w-full justify-around items-center h-[510px]">
            <ImagesHome></ImagesHome>
          </div>
          <Button
            onClick={scrollToLocation}
            radius="sm"
            className="ml-8 w-fit py-7 my-5 text-md font-semibold "
            startContent={<PlaceOutlinedIcon sx={{ fontSize: 58 }} />}
          >
            Ubicación
          </Button>
          <div className="flex justify-center h-[60%] w-full pl-5">
            <div className="px-4 w-[70%]  flex flex-col pt-3">
              <p className="pt-3 text-lg font-bold text-red-500">
                CARACTERÍSTICAS GENERALES
              </p>
              <ul className="flex flex-wrap  items-center bg-gray-100 h-[85px] mt-3">
                {icons.map((icon, index) => (
                  <Caracteristicas
                    key={index}
                    title={icon.title}
                    comp={icon.icon}
                  />
                ))}
              </ul>
              <div className=" w-full pt-4">
                <p className="pt-3 text-lg font-bold text-red-500">
                  AMBIENTES Y EXPANSIONES
                </p>
                <div className="pr-4 w-full  flex flex-wrap bg-gray-100 items-center h-[100px] mt-3">
                  {items.map((item) => (
                    <Ambientes key={item} title={item} />
                  ))}
                </div>
                <div className="pt-3 flex flex-col">
                  <p className="pt-3 text-sm font-bold text-red-500">
                    DESCRIPCIÓN
                  </p>
                  <p className="pt-3">
                    Hermoso departamento en edificio de categoría. Vista
                    panorámica al Norte, todo luz y sol. Palier semiprivado ,
                    living comedor con salida a balcón aterrazado con parrilla,
                    cómoda cocina con muebles completos y spar, espacio
                    desayunador. lavadero independiente. 2 dormitorios con
                    placard , baño y toilette. Detalles de categoría: Living con
                    pisos de porcelanato, dormitorios con pisos de parquet,
                    calefacción y refrigeración central por aire, con control
                    individual. Impecable estado. Posibilidad de Alquilar
                    cochera en garaje ubicado enfrente. Apto crédito. Toma
                    propiedad en parte de pago únicamente 2 ambientes de mas de
                    50 m2,en Villa del Parque, Monte Castro y Santa Rita.
                  </p>
                  <span className="text-[12px] pt-16 flex flex-col text-justify">
                    <span className="text-[13px] font-bold">
                      Brick Propiedades & Servicios (Alex Katz 6135 CMCPSI)
                    </span>
                    <p><span className="text-[12px] font-bold">AVISO LEGAL: </span>
                    Las descripciones arquitectónicas y funcionales, valores de
                    expensas, impuestos y servicios, fotos y medidas de este
                    inmueble son aproximados. Los datos fueron proporcionados
                    por el propietario a cada licenciatario de la marca BRICK
                    Propiedades & Servicios y BRICK (cuyos datos se exhiben al
                    pie de los datos de contacto de cada Local u Oficina).
                    Dichos datos pueden no estar actualizados a la hora de la
                    visualización de este aviso por lo cual pueden arrojar
                    inexactitudes y discordancias con las que surgen de los las
                    facturas, títulos y planos legales del inmueble. El
                    interesado deberá realizar las verificaciones respectivas
                    previamente a la realización de cualquier operación,
                    requiriendo por sí o los profesionales de su confianza
                    (escribanos, abogados, contadores) las copias necesarias de
                    la documentación que corresponda.</p>
                    
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white w-[30%]">
              <div className="w-full flex flex-col gap-4  px-7 mt-4 ">
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
              <div className="w-full px-7">
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
          <div className="bg-white pl-3 ">
            <p className="pt-3 text-lg font-bold text-red-500 pl-5">
              UBICACIÓN
            </p>
            <p className="pt-3 pl-5 leading-[8px] font-bold">
              3 DE FEBRERO al 1400 Piso 6
            </p>
            <p className="pt-3 pl-5 leading-[8px]">BELGRANO / C.A.B.A.</p>
            <div className="w-full flex py-4 pl-5 " ref={ubicacionRef}>
              <span className="w-[60%]">
                <Image
                  // id="ubicacion"
                  // height={250}
                  className="rounded-md"
                  src="/images/maps.jpg"
                />
              </span>
              <span className="w-[40%]  bg-gray-100 rounded-md p-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                deserunt esse illo non. Deleniti ducimus iusto omnis, rerum
                dolorem dolorum nam quis fugit, hic porro ex explicabo earum
                esse amet.
              </span>
            </div>
          </div>
        </Main>
        <Footer />
      </Layout>
    </>
  );
};
