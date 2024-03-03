import { Contact } from "./components/Contact"
import { Header } from "./components/Header"
import { Main } from "./components/Main"

export const App = () => {

  return (
    <>
      <Header />
      <Main className="w-3/4 flex mt-32" children={<Contact></Contact>} />




    </>
  )
}