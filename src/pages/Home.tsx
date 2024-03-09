import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout"
import { Main } from "../components/Main"
import { LuDoorOpen } from "react-icons/lu"
import { PiToilet } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";
import { GiHomeGarage } from "react-icons/gi";
import { IoKeyOutline } from "react-icons/io5";
import { RxDimensions } from "react-icons/rx";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { Button, Input, Textarea } from "@nextui-org/react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

export const Home = () => {
    return (
        <>
            <Layout clases="w-full min-h-screen flex flex-col justify-between">
                <Header />
                <Main clases="w-full flex flex-col mt-24 ">
                    <div className="flex  h-[40%] pl-8 items-center pt-3">
                        <p className="bg-black text-white w-fit px-4 py-1 rounded-lg mr-3">VENTA</p>

                        <p className="text-xl font-semibold">BERUTI AL 2500 PISO 6</p>
                    </div>
                    <p className="pl-8 py-2 text-lg font-semibold" >DEPARTAMENTO EN VENTA B.NORTE / C.A.B.A.</p>
                    <p className="pl-8 text-lg font-semibold " >3 AMBIENTES</p>
                    <div className=" h-[40%]">
                        imagenes
                    </div>
                    <div className="flex justify-center h-[60%] w-full ">
                        <div className="px-4 w-[70%]  flex flex-col ">
                            <p className="pt-3 text-sm font-bold text-red-500">CARACTERÍSTICAS GENERALES</p>
                            <ul className="flex justify-center space-x-8 items-center bg-gray-100 h-[85px] mt-3">
                                <span className="flex items-center">
                                    <IoKeyOutline size={45} className="pr-3" />
                                    <span className="flex flex-col items-center">
                                        <li className="leading-tight">
                                            Cod. Propiedad</li>
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
                                </span>
                            </ul>
                            <div className=" w-full pt-4">
                                <p className="pt-3 text-sm font-bold text-red-500">AMBIENTES Y EXPANSIONES</p>
                                <div className="px-4 w-full  flex flex-wrap bg-gray-100items-center h-[150px] mt-3">
                                    <span className="flex">
                                        <CheckRoundedIcon className="text-green-500" />
                                        <p> Living-Comedor</p>
                                    </span>
                                    <span className="flex">
                                        <CheckRoundedIcon className="text-green-500" />
                                        <p>Dormitorio</p>
                                    </span>
                                    <span className="flex">
                                        <CheckRoundedIcon className="text-green-500" />
                                        <p>Placard</p>
                                    </span>
                                    <span className="flex">
                                        <CheckRoundedIcon className="text-green-500" />
                                        <p>Lavadero</p>
                                    </span>
                                    <span className="flex">
                                        <CheckRoundedIcon className="text-green-500" />
                                        <p>Baulera</p>
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className="bg-gray-600 w-[30%]">

                            <div className="w-full flex flex-col gap-4  px-7 mt-4 mr-2 ">
                                <h1 className="font-bold text-2xl">¿Te intersa? Contactate ahora</h1>
                                <div className="flex-col w-full ">
                                    <Input isRequired type="text" variant="underlined" label="Nombre" />
                                    <Input isRequired type="text" variant="underlined" label="Teléfono" />
                                    <Input isRequired type="email" variant="underlined" label="E-mail" />
                                </div>
                                <Textarea
                                    maxRows={5}
                                    isRequired
                                    variant="underlined"
                                    labelPlacement="outside"
                                    maxLength={500}
                                    label="Mensaje"
                                    className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                                />
                                <Button radius="sm" className="my-5 py-7 font-semibold text-lg" >
                                    ENVIAR MENSAJE
                                </Button>
                            </div>
                            <div className="w-full px-7 ml-2">

                                <p className="flex justify-center mb-3">O también</p>
                                <Button radius="sm" className="w-full py-7 my-2 text-xl font-semibold" startContent={<PhoneIcon sx={{ fontSize: 80 }} />}>
                                    +54 9 2262-240370
                                </Button>
                                <Button radius="sm" className="w-full py-7 my-2 text-sm font-semibold" startContent={<MailOutlineIcon sx={{ fontSize: 80 }} />}>
                                    jesicaortizestudioinmobiliario@gmail.com
                                </Button>



                            </div>
                        </div>
                    </div>
                </Main>
                <Footer />
            </Layout>
        </>
    )
}
