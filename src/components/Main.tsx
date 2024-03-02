import {ReactNode} from "react"

interface MainProps {
    children: ReactNode
}

export const Main = ({children}: MainProps) => {
  return (
    <main className="flex bg-blue-500 h-screen">
        {children}
        <div className="w-3/4">
            Prueba
        </div>
    </main>
  )
}
