import { Image } from "@nextui-org/react";
// import { AiOutlineExpand } from "react-icons/ai";
export const ImagesHome = () => {
  return (
    <>
      <div className=" w-[49%] h-[510px] overflow-hidden rounded-md relative group ">
        <Image
          width={662}
          className="object-cover w-full h-full rounded-md transition duration-300 group-hover:opacity-70 "
          src="/images/imagen5.jpg"
        />
        {/* <div className="absolute bottom-4 right-4">
          <AiOutlineExpand />
        </div> */}
        <div className="bg-gray-800 opacity-0 absolute inset-0 rounded-md group-hover:opacity-50"></div>
      </div>

      <div className=" w-[49%] flex flex-wrap rounded-md justify-around">
        <span className=" w-[48%] rounded-md h-[250px] overflow-hidden my-1 mx-0.5 relative group">
          <Image
            height={250}
            className="object-cover w-full h-full rounded-md transition duration-300 group-hover:opacity-70"
            src="/images/imagen1.jpg"
          />
          <div className="bg-gray-800 opacity-0 absolute inset-0 rounded-md group-hover:opacity-50"></div>
        </span>
        <span className=" w-[48%] rounded-md h-[250px] overflow-hidden my-1 mx-0.5 relative group">
          <Image
            height={250}
            className="object-cover w-full h-full rounded-md transition duration-300 group-hover:opacity-70"
            src="/images/imagen2.jpg"
          />
          <div className="bg-gray-800 opacity-0 absolute inset-0 rounded-md group-hover:opacity-50"></div>
        </span>
        <span className=" w-[48%] rounded-md h-[250px] overflow-hidden my-1 mx-0.5 relative group">
          <Image
            height={250}
            className="object-cover w-full h-full rounded-md transition duration-300 group-hover:opacity-70"
            src="/images/imagen3.jpg"
          />
          <div className="bg-gray-800 opacity-0 absolute inset-0 rounded-md group-hover:opacity-50"></div>
        </span>
        <span className=" w-[48%] rounded-md h-[250px] overflow-hidden my-1 mx-0.5 relative group">
          <Image
            height={250}
            className="object-cover w-full h-full rounded-md transition duration-300 group-hover:opacity-70"
            src="/images/imagen4.jpg"
          />
          <div className="bg-gray-800 opacity-0 absolute inset-0 rounded-md group-hover:opacity-50"></div>
        </span>
      </div>
    </>
  );
};
