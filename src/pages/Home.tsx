import { Layout } from "../components/Layout"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Main } from "../components/Main"




export const Home = () => {
    return (
        <>
            {/* <div className="w-full min-h-screen flex flex-col justify-between">           
             <div className="bg-red-500"><p>Hola</p></div>
                <div className="bg-green-500"><p>Hola</p></div>
                <div className="bg-blue-500"><p>Hola</p></div>
            </div>
 */}

            <Layout clases="w-full min-h-screen flex flex-col justify-between">
                
                <Header />

                <Main clases="w-3/4 flex mt-24">
                    <div className="w-3/4 h-full bg-white rounded-2xl  m-2 px-4 py-4 text-xl">
                        <div className="w-full py-4">
                            <h1 className="py-3 font-bold">SOY EL INICIO</h1>
                        </div>
                        <div className="w-full flex h-72">
                         
                        </div>
                    </div>
                </Main>
                <Footer />
            </Layout>



        </>
    )
}
