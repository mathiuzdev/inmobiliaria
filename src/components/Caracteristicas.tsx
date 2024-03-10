
interface Items{
    title:string,
    comp: React.ReactNode
}
export const Caracteristicas = ({title, comp}:Items) => {

  return (
    <span className="flex items-center w-1/4">
      
                    {comp} 
                  <span className="flex flex-col items-center ">
                    <li className="leading-tight ">{title}</li>
                    <p className="font-bold w-full leading-tight">5</p>
                  </span>
                </span>
  )
}
