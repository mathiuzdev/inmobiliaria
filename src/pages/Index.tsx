import { Layout } from "../components/Layout";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Image } from "@nextui-org/react";

export const Index = () => {
  return (
    <>
      <Layout clases="w-full min-h-screen flex flex-col justify-between">
        <Header />

        <Main clases="flex mt-24 w-full">
        <div className="flex flex-col items-center justify-center w-full">
    <div className="w-full h-[480px] bg-green-600 relative">
        <img src="images/index.jpg" alt="" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center bo">
            <p className=" text-[50px] font-bold">Encontra tu propiedad</p>
        </div>
    </div>
    <div className="bg-blue-500">hola</div>
</div>
        </Main>
        <Footer />
      </Layout>
    </>
  );
};
