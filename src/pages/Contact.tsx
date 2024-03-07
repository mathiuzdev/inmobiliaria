
import { Button, Input, Textarea } from "@nextui-org/react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Layout } from "../components/Layout";

export const Contact = () => {
    return (
        <>
            <Layout clases="flex flex-col justify-between">
                <Header />
                <Main clases="w-3/4 flex mt-24">
                    <div className="w-3/5 flex flex-col gap-4  px-7 mt-4 mr-2">
                        <h1 className="font-bold text-2xl">¡Estamos para ayudarte!</h1>
                        <h2 className="text-l">Complete el siguiente formulario. A la brevedad nos pondremos en contacto con usted.</h2>
                        <label htmlFor="" className="font-bold" >Datos personales</label>
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
                    <div className="w-2/5 px-7 mt-4 ml-2">
                        <h1 className="font-bold text-2xl">Siempre Cerca</h1>
                        <h2 className=" text-l"> También podés escribirnos directamente a</h2>


                        <Button radius="sm" className="w-full py-7 my-5 text-sm font-semibold" startContent={<MailOutlineIcon sx={{ fontSize: 80 }} />}>
                            jesicaortizestudioinmobiliario@gmail.com
                        </Button>

                        <p className="flex justify-center">O llamarnos al</p>
                        <Button radius="sm" className="w-full py-7 my-5 text-xl font-semibold" startContent={<PhoneIcon sx={{ fontSize: 80 }} />}>
                            +54 9 2262-240370
                        </Button>

                        <div>
                            <h1 className="font-bold text-xl mb-3 ">SEGUINOS EN</h1>

                            <div className="h-14 flex justify-start" >
                                <FacebookIcon sx={{ fontSize: 58 }} />
                                <InstagramIcon sx={{ fontSize: 58 }} />
                            </div>


                        </div>

                    </div>
                </Main>

                <Footer />
            </Layout>
        </>



    )
}
