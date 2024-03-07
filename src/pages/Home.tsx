import { Layout } from "../components/Layout"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Outlet } from "react-router"

export const Home = () => {
    return (
        <>
            <Layout clases="flex flex-col">
                <Header/>

                <Outlet />
                <Footer />

            </Layout>

        </>
    )
}
