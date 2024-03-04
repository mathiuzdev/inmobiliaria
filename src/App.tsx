import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Tasar } from "./components/Tasar"

export const App = () => {
  const listaNav = ["COMPRAR","ALQUILAR","TASÁ AHORA","CONTACTO"];

  return (
    <>
      <Header lista={listaNav}/>
      {/* <Main className="w-3/4 flex mt-32" children={<Contact></Contact>} /> */}
      <Main className="w-full flex mt-32" children={<Tasar></Tasar>} />
      <Footer lista={listaNav}/>



    </>
  )
}