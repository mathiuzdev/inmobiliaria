import { ButtonClean } from "./ButtonClean"

interface Title {
    title: string
}


export const CleanFilterAll = ({ title }: Title) => {
    const lista = ['Matias', 'Luna', 'Wachin']
    return (
        <div className="flex p-2 w-full justify-around items-center">
            <h2 className="text-xl font-bold">{title}</h2>
            <ButtonClean title="Limpiar todo" className="text-black rounded-3xl bg-gray-200 p-2 hover:bg-gray-400" />
            <ul>
                {lista.map(nombres => <li key={nombres} className="inline-block text-3xl
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-0.5
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-black
                before:from-gray-600
                before:via-slate-400
                before:to-zinc-500
                hover:before:w-full
                hover:before:opacity-100">{nombres}</li>)}
            </ul>
        </div>
    )
}
