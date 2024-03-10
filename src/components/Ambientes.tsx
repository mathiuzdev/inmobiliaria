import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
interface Item{
    title:string
}
export const Ambientes = ({title}:Item) => {
  return (
    <>
    
    <span className="flex px-5 grow-0 w-[25%] h-fit">
      <CheckRoundedIcon className="text-green-500 mr-3" />
      <p className="h-fit">{title}</p>
    </span>
    </>
  );
};
