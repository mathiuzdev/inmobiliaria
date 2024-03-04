import { ButtonClean } from "./ButtonClean"
import { ButtonGroupInput } from "./ButtonGroupInput";
import { CheckBoxGroup } from "./CheckBoxGroup";
import { CleanFilter } from "./CleanFilter"
import { RadioGroupInput } from "./RadioGroupInput";
import { ScopeInput } from "./ScopeInput";

export const AsideFilter = () => {
  const title = ["Filtros","Tipo de inmueble","Ambientes","Precio","Superficie en M2","Baños","Cocheras","Exteriores", "Otras Características"];
  const tipoDePropiedadNombres = ["Terreno", "Casa", "Departamento", "Jardin","Hospital"]
  const numbers = ["1","2","3","4","5","6+"]
  const tipoDePago = ["Pesos","Dólares"]
  const tipoDeSuperfice = ["Cubierta", "Total"]

  const divPrueba =   <div className="pointer-events-none flex items-center">
  <span className="text-default-400 text-small">$</span>
</div>
  return (
    <aside className="w-1/4 bg-white rounded-2xl  m-2 px-4 py-4 h-auto text-xl">
        <CleanFilter title={title[0]} classNameTitle="text-2xl font-bold" classNameDiv="flex px-2 py-6 w-full justify-between items-center" children={<ButtonClean title="Limpiar todo" className="text-black rounded-xl bg-gray-200 px-5 py-2 hover:bg-gray-400"/>}/>

        <CleanFilter title={title[1]} classNameTitle="font-bold" classNameDiv="flex p-2 w-full justify-between items-center border-gray-200 border-b-2 mb-2" children={<ButtonClean title="Limpiar" className="text-black rounded-xl bg-gray-200 px-5 py-2 hover:bg-gray-400"/>} input={<CheckBoxGroup names={tipoDePropiedadNombres}/>}/>
        <CleanFilter title={title[2
        ]} classNameTitle="font-bold" classNameDiv="flex p-2 w-full justify-between items-center border-gray-200 border-b-2" children={<ButtonClean title="Limpiar" className="text-black rounded-xl bg-gray-200 px-5 py-2 hover:bg-gray-400"/>} input={<ButtonGroupInput names={numbers}/>}/>
        <CleanFilter title={title[3]} classNameTitle="font-bold" classNameDiv="flex p-2 w-full justify-between items-center border-gray-200 border-b-2 mb-2" children={<ButtonClean title="Limpiar" className="text-black rounded-xl bg-gray-200 px-5 py-2 hover:bg-gray-400"/>} input={<RadioGroupInput names={tipoDePago}/>} input2={<ScopeInput element={divPrueba}/>}/>
        <CleanFilter title={title[4]} classNameTitle="font-bold" classNameDiv="flex p-2 w-full justify-between items-center border-gray-200 border-b-2 mb-2" children={<ButtonClean title="Limpiar" className="text-black rounded-xl bg-gray-200 px-5 py-2 hover:bg-gray-400"/>} input={<RadioGroupInput names={tipoDeSuperfice}/>} input2={<ScopeInput/>}/>
        <CleanFilter title={title[5
        ]} classNameTitle="font-bold" classNameDiv="flex p-2 w-full justify-between items-center border-gray-200 border-b-2" children={<ButtonClean title="Limpiar" className="text-black rounded-xl bg-gray-200 px-5 py-2 hover:bg-gray-400"/>} input={<ButtonGroupInput names={numbers}/>}/>
                <CleanFilter title={title[6
        ]} classNameTitle="font-bold" classNameDiv="flex p-2 w-full justify-between items-center border-gray-200 border-b-2" children={<ButtonClean title="Limpiar" className="text-black rounded-xl bg-gray-200 px-5 py-2 hover:bg-gray-400"/>} input={<ButtonGroupInput names={numbers}/>}/>
         <CleanFilter title={title[7]} classNameTitle="font-bold" classNameDiv="flex p-2 w-full justify-between items-center border-gray-200 border-b-2 mb-2" children={<ButtonClean title="Limpiar" className="text-black rounded-xl bg-gray-200 px-5 py-2 hover:bg-gray-400"/>} input={<CheckBoxGroup names={tipoDePropiedadNombres}/>}/>
         <CleanFilter title={title[8]} classNameTitle="font-bold" classNameDiv="flex p-2 w-full justify-between items-center border-gray-200 border-b-2 mb-2" children={<ButtonClean title="Limpiar" className="text-black rounded-xl bg-gray-200 px-5 py-2 hover:bg-gray-400"/>} input={<CheckBoxGroup names={tipoDePropiedadNombres}/>}/>
    </aside>
  )
}
