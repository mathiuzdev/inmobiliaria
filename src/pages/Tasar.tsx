import { Button, Input, Textarea } from "@nextui-org/react";
import image from "/images/tasar.jpg";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export const Tasar = () => {
  return (
    <>
      <Layout clases="flex flex-col">
        <Header />
        <Main clases="w-full flex mt-24">
          <div className="flex-col justify-center ">
            <div className="bg-blue-100 w-full h-96 mb-10 relative">
              <img className="w-full h-96 object-cover " src={image} alt="" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-3xl font-bold">TASÁ AHORA</p>
              </div>
            </div>

            <div>
              <div className="flex justify-center">


                <div className="w-1/4 px-7 mt-1 ml-2">
                  Tasar tu propiedad es mucho más que visitarla y darle una cifra
                  tentativa y complaciente. La tasación es un proceso con compromiso
                  y responsabilidad profesional, conocimiento real del mercado y la
                  utilización de métodos específicos para darle una valoración de
                  venta o alquiler. Estamos dispuestos a asesorarte de la mejor
                  manera posible. Contactanos
                </div>

                <div className="w-2/5 flex flex-col gap-4  px-7 mt-1 mr-2">
                  <h1 className="font-bold text-2xl">Tasaciones</h1>
                  <h2 className="text-l">
                    ¡Pida su Tasación! Complete el siguiente formulario
                  </h2>

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
                    <Input
                      type="text"
                      variant="underlined"
                      label="Dirección de la propiedad"
                    />
                    <div className="flex">
                      <Input
                        className="mr-1"
                        type="text"
                        variant="underlined"
                        label="Tipo de inmueble"
                      />
                      <Input
                        className="ml-1"
                        type="text"
                        variant="underlined"
                        label="Localidad"
                      />
                    </div>
                  </div>
                  <Textarea
                    maxRows={5}
                    variant="underlined"
                    labelPlacement="outside"
                    maxLength={500}
                    label="Mensaje"
                    className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                  />
                  <Button radius="sm" className="my-5 py-7 font-semibold text-lg mb-0">
                    SOLICITAR TASACIÓN
                  </Button>
                  <p className="flex justify-center ">O también</p>
                  <div className="flex w-full">
                    <Button
                      className="font-bold text-lg w-1/2 py-7 mr-1"
                      radius="sm"
                    >
                      +54 92262-240370
                    </Button>
                    <Button
                      className="font-bold text-lg w-1/2 py-7 ml-1"
                      radius="sm"
                    >
                      70 N° 3026
                    </Button>
                  </div>
                  <Button className="font-bold text-lg py-7">
                    jesicaortizestudioinmobiliario@gmail.com
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Main>
        <Footer/>
      </Layout>

    </>

  );
};
