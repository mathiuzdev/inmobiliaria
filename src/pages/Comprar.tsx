import { Layout } from "../components/Layout"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Pagination } from "@nextui-org/react";


import { AsideFilter } from "../components/AsideFilter"
import { HomeCard } from "../components/HomeCard"

export const Comprar = () => {
    return (
        <>


            <Layout clases="w-full min-h-screen flex flex-col justify-between">
      
                    <Header />
                    <div className="flex w-full bg-gray-100 py-10 min-w-[555px]">

                        <AsideFilter />
                        <Main clases="w-[80%] flex flex-col mt-24 min-w-[555px] phone:w-full ">
                            <div className="flex justify-center w-full pl-[30px] pr-[27px] ">

                                <div className=" w-full h-full  rounded-2xl  my-2  py-4 text-xl bg-gray-100">
                                    <div className="w-full py-4">
                                        <h1 className="py-3 font-bold">Variable de propiedades</h1>
                                    </div>
                                    <div className="flex flex-wrap w-full gap-6 justify-start">
                                        <HomeCard />
                                        <HomeCard />
                                        <HomeCard />
                                        <HomeCard />
                                        <HomeCard />
                                        <HomeCard />
                                        <HomeCard />
                                        <HomeCard />
                                        <HomeCard />
                                        <HomeCard />
                                        <HomeCard />
                                        <HomeCard />
                                        <HomeCard />
                                        <HomeCard />
                                        <HomeCard />

                                    </div>
                                </div>
                            </div>



                            <div className="flex flex-wrap gap-4 justify-center pl-[27px]">

                                <Pagination key="ligth" total={16} initialPage={1} variant="light" size="lg" />
                            </div>
                        </Main>
                    </div>
                    <Footer />
       
            </Layout >



        </>
    )
}
