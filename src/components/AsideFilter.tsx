import { CleanFilterAll } from "./CleanFilterAll"

export const AsideFilter = () => {
  const title = "Filtros";
  return (
    <aside className="w-1/4 bg-white rounded-3xl border-black m-2">
        <CleanFilterAll title={title}></CleanFilterAll>
    </aside>
  )
}
